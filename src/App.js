import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { animated, useSpring } from "react-spring";
import "./App.css";
import logo from "./assets/logo.png";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const [file, setFile] = useState();
  const sendMail = (e) => {
    const { email, name, surname, phone } = e;
    emailjs
      .send(
        "service_edl5tao",
        "template_a9kmrqn",
        {
          email,
          name,
          surname,
          phone,
        },
        "21h7DxHbI5IbHbH2E"
      )
      .then((r) => {
        methods.reset();
        console.log(r);
      })
      .catch((er) => console.log(er));
  };
  return (
    <FormProvider {...methods}>
      <div className="App">
        <header id="home">
          <div className="container nav">
            <a href="#home">
              <img src={logo} alt="najdem_job" />
            </a>
            <div className="nav_btn">
              <a href="#jobs">
                <div className="btn primary">chci práci</div>
              </a>
            </div>
          </div>
        </header>
        <div className="hero_image">
          <div className="container hero_container">
            <h1 className="hero_title">
              Najdi job podle
              <br />
              svých představ
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="why">
            <h2>Proč my?</h2>
            <ul>
              <li>
                Kvalitní pracovní nabídky – Zajistíme pro vás pouze seriózní
                nabídky práce.
              </li>
              <li>
                Vysoké fixní ohodnocení – Dostanete za svou práci férově
                zaplaceno.
              </li>
              <li>
                Bohaté firemní benefity – Kromě finančního ohodnocení jsou
                samozřejmostí také benefity, které ocení každý.
              </li>
              <li>
                Finanční bonusy – Motivační příplatky za kvalitně odvedenou
                práci pro každého.
              </li>
              <li>
                Smlouva na hlavní pracovní poměr nebo IČO – Získejte veškeré
                výhody spojené s hlavním pracovním poměrem.
              </li>
            </ul>
          </div>
        </div>
        <div className="positions_wrapper">
          <div className="container">
            <div className="positions">
              <h2 id="jobs">Volné pozice</h2>
              <div className="positions_left">
                <div>
                  <img src={require("./assets/1.jpg")} alt="img 1" />
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
                    <br />- Účast na mezinárodních školeních a kongresech v
                    rámci Evropy
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
              <div className="positions_right">
                <div>
                  <h3>Team Manager</h3>
                  <p>
                    <strong>Jaké bys měl mít předpoklady:</strong>
                    <br />
                    - Obchodního ducha a tah na branku
                    <br />
                    - Nevnímáš problém jako překážku, ale jako výzvu, která
                    posune dál tebe i firmu
                    <br />
                    - Do všeho se pouštíš na 100 % a umíš dotahovat věci do
                    konce
                    <br />- Pozice je vhodná i pro absolventy
                  </p>
                  <p>
                    <strong>Pracovní náplň:</strong>
                    <br />
                    - Budeš se učit novým věcem, rozšiřovat si obzory v nové
                    oblasti zákaznického servisu
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
                    <br />- 50 000 Kč
                  </p>
                </div>
                <div>
                  <img src={require("./assets/2.jpg")} alt="img 1" />
                </div>
              </div>
              <div className="positions_left">
                <div>
                  <img src={require("./assets/3.jpg")} alt="img 2" />
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
                    - Účast na mezinárodních školeních a kongresech v rámci
                    Evropy
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
        <div className="banner_wrapper">
          <div className="container">
            <div className="banner">
              <Cislo
                cislo={1252}
                firstText="zprostředkovaných"
                secondText="míst"
              />
              <Cislo cislo={127} firstText="spokojených" secondText="firem" />
              <Cislo
                cislo={39550}
                firstText="mzda"
                secondText="uchazečů"
                isPrice
              />
              <Cislo
                cislo={74350}
                firstText="mzda"
                secondText="po zapracování"
                isPrice
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="formular">
            <h2>Formulář pro zaslání životopisu</h2>
            <p>
              Stačí nám zaslat životopis a my Vám zajistíme tu nejlepší možnou
              nabídku.
            </p>

            <form onSubmit={methods.handleSubmit(sendMail)}>
              <div className="formular_side">
                <input
                  {...methods.register("name", { required: true })}
                  placeholder="Jméno"
                  name="name"
                />
                <input
                  {...methods.register("phone", { required: true })}
                  placeholder="Telefon"
                  name="phone"
                />

                <div className="formular_input">
                  <label id="label2" className="btn secondary">
                    {!file ? "nahrát životopis" : file.name}
                    <input
                      {...methods.register("cv", { required: true })}
                      name="cv"
                      type="file"
                      onChange={(e) => setFile(e.currentTarget.files[0])}
                    />
                  </label>
                </div>
              </div>
              <div className="formular_side reverse">
                <input
                  {...methods.register("surname", { required: true })}
                  placeholder="Příjímění"
                  name="surname"
                />
                <input
                  {...methods.register("email", { required: true })}
                  placeholder="E-mail"
                  name="email"
                />
                <div>
                  <input
                    {...methods.register("agreement", { required: true })}
                    type="checkbox"
                    id="checkbox"
                    name="agreement"
                  />
                  <label id="label">
                    Odesláním formuláře souhlasíte se zpracováním osobních
                    údajů.
                  </label>
                  <br />
                  <br />
                </div>
                <div className="formular_btn">
                  <button className="btn primary send" type="submit">
                    Odeslat
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <footer className="footer">
          <div className="container">
            <div className="footer-wrap">
              <h4>Nenašli jste pracovní nabídku podle svých představ?</h4>
              <a className="main-tel" href="tel:+420 774 109 193">
                Zavolejte +420 774 109 193
              </a>
            </div>

            <div className="footer-middle">
              <h5>Kontakt</h5>
              <div className="footer-middle-wrap">
                <div>
                  <div>
                    <p>Najdemjob s.r.o.</p>
                    <p>IČO: 17928869</p>
                    <p>Datová schránka: ujwue9a</p>
                    <p>Masarykovo náměstí 3090/15,</p>
                    <p>Moravská Ostrava, 702 00 Ostrava</p>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        width="24px"
                        height="24px"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M21 15.46l-5.27-.61c-.48-.05-.97.07-1.34.33l-2.2 1.47c-2.83-1.5-5.13-3.8-6.64-6.64l1.47-2.2c.26-.37.38-.86.33-1.34L8.54 3 3 3.5v5c0 7.73 6.27 14 14 14h5v-5.09l-1-1.45zm-.83 4.29H19c-6.52 0-11.84-5.32-11.84-11.84V4.83l1.77.16 1.47 2.2c.37.56.48 1.28.29 1.93-.77 2.76-.44 5.63.89 8.09 2.33 4.22 7.22 6.45 11.44 4.11.65-.33 1.37-.08 1.93.29l2.2 1.47.16 1.77zm-.91-7.47c.56-.56.99-1.26 1.26-2.06.14-.41-.18-.85-.63-.85h-3.49c-.45 0-.8.35-.8.8 0 1.61-.89 3.1-2.3 3.96-.35.2-.53.62-.44 1.01l.69 2.76c.14.55.83.64 1.06.16.82-1.7 2.02-3.2 3.41-4.42zm-4.77-2.3c.63-.28 1.21-.69 1.7-1.22.3-.32.5-.72.58-1.15.18-.84-.2-1.69-.92-2.12-.68-.41-1.51-.4-2.19.01-.73.44-1.28 1.1-1.6 1.84-.35.8-.47 1.68-.36 2.55.08.61.24 1.22.47 1.8.2.53.44 1.04.72 1.54.17.31.56.44.88.31.3-.12.47-.42.44-.74-.03-.34-.1-.67-.2-1zm-1.92-1.53c.4-.39.83-.73 1.3-1.01.49-.29 1.05-.42 1.6-.37.56.06 1.08.31 1.5.68.51.45.83 1.09.92 1.76.11.82-.11 1.66-.61 2.32-.2.28-.45.54-.72.79-.25.23-.52.44-.81.63-.46.3-.96.52-1.48.66-.48.14-.98.14-1.46 0-.41-.12-.78-.33-1.09-.62-.6-.57-1-1.32-1.17-2.14-.14-.62-.09-1.26.13-1.84.11-.32.3-.62.54-.88zM3 19h1.5c0-.6.4-1 .99-1 .29 0 .55-.18.65-.45.17-.4.52-.72.97-.84.56-.15 1.14.03 1.49.46.37.46.42 1.13.12 1.64-.37.66-.95 1.14-1.61 1.36-.5.17-.99.45-1.4.82-.23.21-.53.34-.85.37-.15.02-.3-.03-.44-.11-.36-.2-.64-.55-.73-.98-.11-.54-.53-.96-1.08-1.08-.43-.1-.76-.42-.96-.83-.16-.34-.17-.75-.03-1.1zm-.6-3.01c-.08-.08-.19-.12-.3-.1-.16.02-.3-.03-.43-.12-.31-.2-.65-.41-.98-.65-.16-.11-.34-.19-.53-.25-.22-.08-.44-.12-.67-.13-.16-.01-.31-.07-.45-.15-.29-.17-.45-.48-.45-.82 0-.24.06-.47.17-.67.19-.35.46-.65.78-.87.11-.08.25-.12.38-.12.4 0 .78-.16 1.06-.45.3-.31.75-.46 1.17-.4.66.11 1.3.31 1.94.57.46.18.93.33 1.42.45.38.1.78.17 1.18.22.55.06 1.11.09 1.66.11h.03c.04.01.09.01.14.01.6 0 1.1-.5 1.1-1.1v-2.5c0-.4.1-.79.3-1.15.19-.36.48-.66.82-.87.17-.11.36-.2.55-.26.22-.07.44-.11.67-.11.28 0 .54-.11.74-.31.16-.16.28-.37.34-.6.09-.32.11-.67.04-1-.09-.37-.29-.71-.55-.96-.32-.31-.72-.49-1.16-.49h-1c-.6 0-1.1.5-1.1 1.1 0 .26-.21.47-.47.5-.53.05-1.06.09-1.59.11-.42.02-.85-.01-1.27-.07-.3-.05-.59-.14-.86-.28-.21-.11-.41-.24-.59-.4-.23-.21-.5-.37-.79-.48-.15-.06-.31-.1-.47-.1-.29 0-.56.11-.76.3-.16.16-.29.38-.35.6-.11.39-.18.79-.21 1.2-.02.27-.06.55-.13.82-.04.17-.16.32-.31.39-.19.08-.39.15-.59.22-.27.09-.55.18-.83.26-.4.11-.81.22-1.22.31-.47.11-.94.25-1.41.41-.38.12-.74.3-1.07.54-.22.15-.45.3-.66.47-.15.12-.32.24-.5.36-.2.13-.42.24-.65.32-.15.06-.31.1-.47.1-.28 0-.55-.11-.75-.3-.16-.16-.28-.38-.34-.6-.09-.32-.11-.67-.04-1 .09-.37.29-.71.55-.96.32-.31.72-.49 1.16-.49h1c.6 0 1.1-.5 1.1-1.1v-2.5c0-.4-.1-.79-.3-1.15-.19-.36-.48-.66-.82-.87-.17-.11-.36-.2-.55-.26-.22-.07-.44-.11-.67-.11-.28 0-.54-.11-.74-.31-.16-.16-.28-.37-.34-.6-.09-.32-.11-.67-.04-1 .09-.37.29-.71.55-.96.32-.31.72-.49 1.16-.49h1c.6 0 1.1-.5 1.1-1.1V4.83l1.77.16 1.47 2.2c.37.56.48 1.28.29 1.93-.77 2.76-.44 5.63.89 8.09 2.33 4.22 7.22 6.45 11.44 4.11.65-.33 1.37-.08 1.93.29l2.2 1.47.16 1.77zm-.91-7.47c.56-.56.99-1.26 1.26-2.06.14-.41-.18-.85-.63-.85h-3.49c-.45 0-.8.35-.8.8 0 1.61-.89 3.1-2.3 3.96-.35.2-.53.62-.44 1.01l.69 2.76c.14.55.83.64 1.06.16.82-1.7 2.02-3.2 3.41-4.42zm-4.77-2.3c.63-.28 1.21-.69 1.7-1.22.3-.32.5-.72.58-1.15.18-.84-.2-1.69-.92-2.12-.68-.41-1.51-.4-2.19.01-.73.44-1.28 1.1-1.6 1.84-.35.8-.47 1.68-.36 2.55.08.61.24 1.22.47 1.8.2.53.44 1.04.72 1.54.17.31.56.44.88.31.3-.12.47-.42.44-.74-.03-.34-.1-.67-.2-1zm-1.92-1.53c.4-.39.83-.73 1.3-1.01.49-.29 1.05-.42 1.6-.37.56.06 1.08.31 1.5.68.51.45.83 1.09.92 1.76.11.82-.11 1.66-.61 2.32-.2.28-.45.54-.72.79-.25.23-.52.44-.81.63-.46.3-.96.52-1.48.66-.48.14-.98.14-1.46 0-.41-.12-.78-.33-1.09-.62-.6-.57-1-1.32-1.17-2.14-.14-.62-.09-1.26.13-1.84.11-.32.3-.62.54-.88z" />
                      </svg>
                    </div>
                    <div className="text">
                      <span className="label">Klientská linka :</span>
                      <span className="info">+420 774 109 193</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        width="24px"
                        height="24px"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm2.07-7.75L11 15h-2V9.5h2v3.25l1.07-1.07.93 1.12zM13 11.5h2V17h-2v-5.5zm0-2.5h2v2h-2v-2zm4 1h2v2h-2v-2zm0-2h2v2h-2v-2zM7 9h2v2H7V9zm0 2h2v2H7v-2zm0 2h2v2H7v-2zm-4 2h2v2H3v-2zm0-2h2v2H3v-2zm0-2h2v2H3v-2zm0-2h2v2H3v-2zm0-2h2v2H3v-2zm0-2h2v2H3V5zm16 10h2v2h-2v-2zm0-2h2v2h-2v-2zm0-2h2v2h-2v-2zm0-2h2v2h-2V9zm-4-2h2v2h-2V7z" />
                      </svg>
                    </div>
                    <div className="text">
                      <span className="label">Podpora :</span>
                      <span className="info">info@najdemjob.cz</span>
                    </div>
                  </div>
                </div>

                <div>
                  <img src="logo-white.png" alt="najdem_job" />
                </div>
              </div>
            </div>
          </div>
        </footer> */}

        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-heading">
              <h4>Nenašli jste pracovní nabídku podle svých představ?</h4>
            </div>
            <div className="footer-contact">
              <a href="tel:+420 774 109 193">Zavolejte +420 774 109 193</a>
            </div>
            <div className="footer-contact-heading">
              <h5>Kontakt</h5>
            </div>
            <div className="footer-contact-content">
              <p>Najdemjob s.r.o.</p>
              <p>IČO: 17928869</p>
              <p>Datová schránka: ujwue9a</p>
              <p>Masarykovo náměstí 3090/15,</p>
              <p>Moravská Ostrava, 702 00 Ostrava</p>
            </div>
            <div className="footer-contact-support">
              <div className="footer-contact-support-wrap">
                <div className="footer-contact-support-item">
                  <div>
                    <img src="phone.svg" alt="phone" />
                    <p>Klientská linka:</p>
                  </div>
                  <a href="tel:+420 774 109 193">+420 774 109 193</a>
                </div>
                <div className="footer-contact-support-item">
                  <div>
                    <img src="email.svg" alt="phone" />
                    <p>Podpora:</p>
                  </div>
                  <a href="mailto:info@najdemjob.cz">info@najdemjob.cz</a>
                </div>
              </div>
            </div>
            <div className="footer-contact-logo">
              <div>
                <img src="logo-white.png" alt="white logo" />
              </div>
            </div>
            <div className="footer-contact-footer">
              <div>
                <p>Všechny práva jsou vyhrazeny společností Najdem JOB.</p>
              </div>
              <div>
                <p>Zásady zpracování osobních údajů</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </FormProvider>
  );
}

export default App;
