import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { animated, config, useSpring } from 'react-spring';
import './App.css';
import logo from './assets/logo.png';
import logow from './assets/logow.png';

function useIntersectionObserver(elementRef, { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }) {
  const [entry, setEntry] = useState();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}

const Cislo = ({ cislo, firstText, secondText, isPrice }) => {
  const ref = useRef(null);
  const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: cislo,
    delay: 200,
    config: { duration: 1000 },
    pause: true,
  });
  useEffect(() => {
    const entry = ref.current;
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        number.reset();
        number.resume();
        observer.unobserve(entry);
      }
    });
    observer.observe(entry);
    return () => observer.unobserve(entry);
  }, []);

  const num = number.to((n) => n.toFixed(0));

  return (
    <div ref={ref}>
      <h4>
        <animated.span>{num}</animated.span>
        {isPrice && <span>,-</span>}
      </h4>
      <p>
        {firstText}
        <br />
        {secondText}
      </p>
    </div>
  );
};

function App() {
  const methods = useForm();
  const {
    formState: { errors },
  } = methods;
  const [file, setFile] = useState();
  const sendMail = (e) => {
    const { email, name, surname, phone } = e;
    emailjs
      .send(
        'service_edl5tao',
        'template_a9kmrqn',
        {
          email,
          name,
          surname,
          phone,
        },
        '21h7DxHbI5IbHbH2E'
      )
      .then((r) => {
        methods.reset();
        console.log(r);
      })
      .catch((er) => console.log(er));
  };
  return (
    <FormProvider {...methods}>
      <div className='App'>
        <header id='home'>
          <div className='container nav'>
            <a href='#home'>
              <img src={logo} alt='najdem_job' />
            </a>
            <div className='nav_btn'>
              <a href='#jobs'>
                <div className='btn primary'>chci pr??ci</div>
              </a>
            </div>
          </div>
        </header>
        <div className='hero_image'>
          <div className='container hero_container'>
            <h1 className='hero_title'>
              Najdi job podle
              <br />
              sv??ch p??edstav
            </h1>
          </div>
        </div>

        <div className='container'>
          <div className='why'>
            <h2>Pro?? my?</h2>
            <ul>
              <li>Kvalitn?? pracovn?? nab??dky ??? Zajist??me pro v??s pouze seri??zn?? nab??dky pr??ce.</li>
              <li>Vysok?? fixn?? ohodnocen?? ??? Dostanete za svou pr??ci f??rov?? zaplaceno.</li>
              <li>Bohat?? firemn?? benefity ??? Krom?? finan??n??ho ohodnocen?? jsou samoz??ejmost?? tak?? benefity, kter?? ocen?? ka??d??.</li>
              <li>Finan??n?? bonusy ??? Motiva??n?? p????platky za kvalitn?? odvedenou pr??ci pro ka??d??ho.</li>
              <li>Smlouva na hlavn?? pracovn?? pom??r nebo I??O ??? Z??skejte ve??ker?? v??hody spojen?? s hlavn??m pracovn??m pom??rem.</li>
            </ul>
          </div>
        </div>
        <div className='positions_wrapper'>
          <div className='container'>
            <div className='positions'>
              <h2 id='jobs'>Voln?? pozice</h2>
              <div className='positions_left'>
                <div>
                  <img src={require('./assets/1.jpg')} alt='img 1' />
                </div>
                <div>
                  <h3>Account Manager</h3>
                  <p>
                    <strong>Jak?? bys m??l m??t p??edpoklady:</strong>
                    <br />
                    - Chu?? se u??it nov??m v??cem
                    <br />
                    - V??born?? komunika??n?? schopnosti
                    <br />
                    - T??mov??ho ducha
                    <br />
                  </p>
                  <p>
                    <strong>Pracovn?? n??pl??:</strong>
                    <br />- Pr??ce v nov??, modern?? a klimatizovan?? kancel????i
                    <br />
                    - Online a telefonick?? komunikace s na??imi klienty
                    <br />
                    - Komunikace s ??editeli a majiteli firem
                    <br />- ????ast na mezin??rodn??ch ??kolen??ch a kongresech v r??mci Evropy
                  </p>

                  <p>
                    <strong>Benefity:</strong>
                    <br />
                    - Mobiln?? telefon a notebook
                    <br />
                    - Provize z prodeje
                    <br />
                    - Zahrani??n?? a pracovn?? cesty
                    <br />
                    - Profesn?? a osobn?? kou??
                    <br />- Vzd??l??vac?? kurzy
                  </p>
                  <p>
                    <strong>Finan??n?? ohodnocen??:</strong>
                    <br />??? 30 000 K??
                  </p>
                </div>
              </div>
              <div className='positions_right'>
                <div>
                  <h3>Team Manager</h3>
                  <p>
                    <strong>Jak?? bys m??l m??t p??edpoklady:</strong>
                    <br />
                    - Obchodn??ho ducha a tah na branku
                    <br />
                    - Nevn??m???? probl??m jako p??ek????ku, ale jako v??zvu, kter?? posune d??l tebe i firmu
                    <br />
                    - Do v??eho se pou??t???? na 100 % a um???? dotahovat v??ci do konce
                    <br />- Pozice je vhodn?? i pro absolventy
                  </p>
                  <p>
                    <strong>Pracovn?? n??pl??:</strong>
                    <br />
                    - Bude?? se u??it nov??m v??cem, roz??i??ovat si obzory v nov?? oblasti z??kaznick??ho servisu
                    <br />
                    - Bude?? se iniciativn?? pod??let na r??stu firmy
                    <br />
                    - Povede?? skupinu zku??en??ch obchodn??k??
                    <br />
                    - Pracovat v t??mu a spolupracovat se zku??en??mi kolegy
                    <br />
                  </p>
                  <p>
                    <strong>Benefity:</strong>
                    <br />
                    - Mana??ersk?? motiva??n?? program
                    <br />
                    - Provize z prodeje
                    <br />
                    - Kvart??ln?? bonusy
                    <br />
                    - Profesn?? osobn?? kou??
                    <br />
                    - P????sp??vek na dopravu
                    <br />
                    - Vzd??l??vac?? kurzy
                    <br />
                    - Mo??nost firemn??ho automobilu
                    <br />
                  </p>
                  <p>
                    <strong>Finan??n?? ohodnocen??:</strong>
                    <br />- 50 000 K??
                  </p>
                </div>
                <div>
                  <img src={require('./assets/2.jpg')} alt='img 1' />
                </div>
              </div>
              <div className='positions_left'>
                <div>
                  <img src={require('./assets/3.jpg')} alt='img 2' />
                </div>
                <div>
                  <h3>Pracovn??k klientsk??ho centra</h3>
                  <p>
                    <strong>Jak?? bys m??l m??t p??edpoklady:</strong>
                    <br />
                    - Chut u??it se nov??m v??cem
                    <br />
                    - V??born?? komunika??n?? schopnosti
                    <br />- T??mov??ho ducha
                  </p>
                  <p>
                    <strong>Pracovn?? n??pl??:</strong>
                    <br />
                    - Pr??ce v nov??, modern?? a klimatizovan?? kancel??????
                    <br />
                    - Online a telefonick?? komunikace s na??imi klienty
                    <br />
                    - Komunikace s ??editeli a majiteli firem
                    <br />
                    - ????ast na mezin??rodn??ch ??kolen??ch a kongresech v r??mci Evropy
                    <br />
                  </p>
                  <p>
                    <strong>Benefity:</strong>
                    <br />
                    - Progresivn?? kariern?? r??st
                    <br />
                    - Flexibiln?? pracovn?? doba
                    <br />
                    - Bonusov?? program
                    <br />
                    - ??kolen?? v r??mci pracovn?? doby
                    <br />
                    - Firemn?? ve????rky
                    <br />
                    - Firemn?? dovolen??
                    <br />
                    - Voln?? v??kendy
                    <br />
                    - Mobiln?? telefon a notebook
                    <br />
                    - Multisport karta
                    <br />
                  </p>
                  <p>
                    <strong>Finan??n?? ohodnocen??:</strong>
                    <br />- 30 000 K??
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banner_wrapper'>
          <div className='container'>
            <div className='banner'>
              <Cislo cislo={1252} firstText='zprost??edkovan??ch' secondText='m??st' />
              <Cislo cislo={127} firstText='spokojen??ch' secondText='firem' />
              <Cislo cislo={39550} firstText='mzda' secondText='uchaze????' isPrice />
              <Cislo cislo={74350} firstText='mzda' secondText='po zapracov??n??' isPrice />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='formular'>
            <h2>Formul???? pro zasl??n?? ??ivotopisu</h2>
            <p>Sta???? n??m zaslat ??ivotopis a my V??m zajist??me tu nejlep???? mo??nou nab??dku.</p>

            <form onSubmit={methods.handleSubmit(sendMail)}>
              <div className='formular_side'>
                <input {...methods.register('name', { required: true })} placeholder='Jm??no' name='name' />
                <input {...methods.register('phone', { required: true })} placeholder='Telefon' name='phone' />

                <div className='formular_input'>
                  <label id='label2' className='btn secondary'>
                    {!file ? 'nahr??t ??ivotopis' : file.name}
                    <input
                      {...methods.register('cv', { required: true })}
                      name='cv'
                      type='file'
                      onChange={(e) => setFile(e.currentTarget.files[0])}
                    />
                  </label>
                </div>
              </div>
              <div className='formular_side reverse'>
                <input {...methods.register('surname', { required: true })} placeholder='P????j??m??n??' name='surname' />
                <input {...methods.register('email', { required: true })} placeholder='E-mail' name='email' />
                <div>
                  <input {...methods.register('agreement', { required: true })} type='checkbox' id='checkbox' name='agreement' />
                  <label id='label'>Odesl??n??m formul????e souhlas??te se zpracov??n??m osobn??ch ??daj??.</label>
                  <br />
                  <br />
                </div>
                <div className='formular_btn'>
                  <button className='btn primary send' type='submit'>
                    Odeslat
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className='footer'>
          <div className='container wrap'>
            <div className='info'>V??echny pr??va jsou vyhrazeny spole??nost?? Najdem JOB.</div>
            <div className='img'>
              <a href='#'>
                <img src={logow} alt='logo' />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </FormProvider>
  );
}

export default App;
