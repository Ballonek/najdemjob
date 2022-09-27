import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { animated, config, useSpring } from 'react-spring';
import './App.css';
import logo from './assets/logo.png';
import logow from './assets/logow.png';

const Cislo = ({ cislo, firstText, secondText, isPrice }) => {
  const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: cislo,
    delay: 100,
    config: config.molasses,
  });

  const num = number.to((n) => n.toFixed(0));

  return (
    <div>
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
                <div className='btn primary'>chci práci</div>
              </a>
            </div>
          </div>
        </header>
        <div className='hero_image'>
          <div className='container hero_container'>
            <h1 className='hero_title'>
              Najdi job podle
              <br />
              svých představ
            </h1>
          </div>
        </div>

        <div className='container'>
          <div className='why'>
            <h2>Proč my?</h2>
            <ul>
              <li>Kvalitní pracovní nabídky – Zajistíme pro vás pouze seriózní nabídky práce.</li>
              <li>Vysoké fixní ohodnocení – Dostanete za svou práci férově zaplaceno.</li>
              <li>Bohaté firemní benefity – Kromě finančního ohodnocení jsou samozřejmostí také benefity, které ocení každý.</li>
              <li>Finanční bonusy – Motivační příplatky za kvalitně odvedenou práci pro každého.</li>
              <li>Smlouva na hlavní pracovní poměr – Získejte veškeré výhody spojené s hlavním pracovním poměrem.</li>
            </ul>
          </div>
        </div>
        <div className='positions_wrapper'>
          <div className='container'>
            <div className='positions'>
              <h2 id='jobs'>Volné pozice</h2>
              <div className='positions_left'>
                <div>
                  <img src={require('./assets/1.jpg')} alt='img 1' />
                </div>
                <div>
                  <h3>Account Manager</h3>
                  <p>
                    <strong>Jaké bys měl mít předpoklady:</strong>
                    <br />
                    - Chuť se učit novým věcem
                    <br />
                    - Výborné komunikační schopnosti
                    <br />
                    - Týmového ducha
                    <br />
                  </p>
                  <p>
                    <strong>Pracovní náplň:</strong>
                    <br />- Práce v nové, moderní a klimatizované kanceláři
                    <br />
                    - Online a telefonická komunikace s našimi klienty
                    <br />
                    - Komunikace s řediteli a majiteli firem
                    <br />- Účast na mezinárodních školeních a kongresech v rámci Evropy
                  </p>

                  <p>
                    <strong>Benefity:</strong>
                    <br />
                    - Mobilní telefon a notebook
                    <br />
                    - Provize z prodeje
                    <br />
                    - Zahraniční a pracovní cesty
                    <br />
                    - Profesní a osobní kouč
                    <br />- Vzdělávací kurzy
                  </p>
                  <p>
                    <strong>Finanční ohodnocení:</strong>
                    <br />– 30 000 Kč
                  </p>
                </div>
              </div>
              <div className='positions_right'>
                <div>
                  <h3>Team Manager</h3>
                  <p>
                    <strong>Jaké bys měl mít předpoklady:</strong>
                    <br />
                    - Obchodního ducha a tah na branku
                    <br />
                    - Nevnímáš problém jako překážku, ale jako výzvu, která posune dál tebe i firmu
                    <br />
                    - Do všeho se pouštíš na 100 % a umíš dotahovat věci do konce
                    <br />- Pozice je vhodná i pro absolventy
                  </p>
                  <p>
                    <strong>Pracovní náplň:</strong>
                    <br />
                    - Budeš se učit novým věcem, rozšiřovat si obzory v nové oblasti zákaznického servisu
                    <br />
                    - Budeš se iniciativně podílet na růstu firmy
                    <br />
                    - Povedeš skupinu zkušených obchodníků
                    <br />
                    - Pracovat v týmu a spolupracovat se zkušenými kolegy
                    <br />
                  </p>
                  <p>
                    <strong>Benefity:</strong>
                    <br />
                    - Manažerský motivační program
                    <br />
                    - Provize z prodeje
                    <br />
                    - Kvartální bonusy
                    <br />
                    - Profesní osobní kouč
                    <br />
                    - Příspěvek na dopravu
                    <br />
                    - Vzdělávací kurzy
                    <br />
                    - Možnost firemního automobilu
                    <br />
                  </p>
                  <p>
                    <strong>Finanční ohodnocení:</strong>
                    <br />- 30 000 Kč
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
                  <h3>Pracovník klientského centra</h3>
                  <p>
                    <strong>Jaké bys měl mít předpoklady:</strong>
                    <br />
                    - Chut učit se novým věcem
                    <br />
                    - Výborné komunikační schopnosti
                    <br />- Týmového ducha
                  </p>
                  <p>
                    <strong>Pracovní náplň:</strong>
                    <br />
                    - Práce v nové, moderní a klimatizované kanceláří
                    <br />
                    - Online a telefonická komunikace s našimi klienty
                    <br />
                    - Komunikace s řediteli a majiteli firem
                    <br />
                    - Účast na mezinárodních školeních a kongresech v rámci Evropy
                    <br />
                  </p>
                  <p>
                    <strong>Benefity:</strong>
                    <br />
                    - Progresivní karierní růst
                    <br />
                    - Flexibilní pracovní doba
                    <br />
                    - Bonusový program
                    <br />
                    - Školení v rámci pracovní doby
                    <br />
                    - Firemní večírky
                    <br />
                    - Firemní dovolené
                    <br />
                    - Volné víkendy
                    <br />
                    - Mobilní telefon a notebook
                    <br />
                    - Multisport karta
                    <br />
                  </p>
                  <p>
                    <strong>Finanční ohodnocení:</strong>
                    <br />- 30 000 Kč
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banner_wrapper'>
          <div className='container'>
            <div className='banner'>
              <Cislo cislo={1252} firstText='zprostředkovaných' secondText='míst' />
              <Cislo cislo={127} firstText='spokojených' secondText='firem' />
              <Cislo cislo={39550} firstText='mzda' secondText='uchazečů' isPrice />
              <Cislo cislo={74350} firstText='mzda' secondText='po zapracování' isPrice />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='formular'>
            <h2>Formulář pro zaslání životopisu</h2>
            <p>Stačí nám zaslat životopis a my Vám zajistíme tu nejlepší možnou nabídku.</p>

            <form onSubmit={methods.handleSubmit(sendMail)}>
              <div className='formular_side'>
                <input {...methods.register('name', { required: true })} placeholder='Jméno' name='name' />
                <input {...methods.register('phone', { required: true })} placeholder='Telefon' name='phone' />

                <div className='formular_input'>
                  <label id='label2' className='btn secondary'>
                    {!file ? 'nahrát životopis' : file.name}
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
                <input {...methods.register('surname', { required: true })} placeholder='Příjímění' name='surname' />
                <input {...methods.register('email', { required: true })} placeholder='E-mail' name='email' />
                <div>
                  <input {...methods.register('agreement', { required: true })} type='checkbox' id='checkbox' name='agreement' />
                  <label id='label'>Odesláním formuláře souhlasíte se zpracováním osobních údajů.</label>
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
            <div className='info'>Všechny práva jsou vyhrazeny společností Najdem JOB.</div>
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
