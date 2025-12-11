import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavLinks from '../components/nav-links'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Demystificator</title>
          <meta property="og:title" content="Demystificator" />
          <link rel="canonical" href="https://demystificator.teleporthq.app/" />
        </Head>
        <div className="home-thq-navbar-elm">
          <header
            data-thq="thq-navbar"
            className="home-thq-navbar-interactive-elm"
          >
            <div className="home-thq-branding-elm1">
              <span className="home-text100">Demystificator</span>
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-thq-desktop-menu-elm"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-thq-nav-elm1"
              >
                <div className="home-thq-right-elm">
                  <a href="#about" className="home-link10">
                    <NavLinks
                      link1="à propos"
                      rootClassName="nav-linksroot-class-name"
                      className="home-thq-nav-links-elm"
                    ></NavLinks>
                  </a>
                  <div className="home-thq-button-elm">
                    <button className="home-thq-work-with-us-elm1 button">
                      <a href="#explore" className="home-link11">
                        explorer
                      </a>
                      <img
                        alt="image"
                        src="/hamburger.svg"
                        className="home-image1"
                      />
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="home-thq-burger-menu-elm"
            >
              <button className="home-thq-work-with-us-elm2 button">
                <span className="home-text101">work with us</span>
                <img alt="image" src="/hamburger.svg" className="home-image2" />
              </button>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="home-thq-mobile-menu-elm"
            >
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-thq-nav-elm2"
              >
                <div className="home-thq-top-elm">
                  <div className="home-thq-branding-elm2">
                    <span className="home-text102">Demystificator</span>
                  </div>
                  <div
                    data-thq="thq-close-menu"
                    className="home-thq-menu-close-elm"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon1">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-thq-middle-elm"
                >
                  <div className="home-thq-links-elm">
                    <a href="#about" className="home-thq-link-elm navLink">
                      à propos
                    </a>
                  </div>
                  <a
                    href="#explore"
                    className="home-thq-work-with-us-elm3 button"
                  >
                    <span className="home-text103">explorer</span>
                  </a>
                </nav>
              </div>
            </div>
          </header>
        </div>
        <div className="home-thq-hero-elm">
          <div className="home-thq-header-elm">
            <h1 className="home-text104">
              <span>
                Une collection de ressources et outils pour lutter contre les 
              </span>
              <span className="home-text106"> </span>
              <span className="home-text107">fake news </span>
              <span> et la </span>
              <span className="home-text109"> désinformation </span>
              <span> en ligne.</span>
            </h1>
          </div>
          <div className="home-thq-hero-image-elm">
            <img alt="image" src="/computer.svg" className="home-image3" />
          </div>
        </div>
        <div id="explore" className="home-thq-explore-elm">
          <div className="home-container11">
            <div className="home-container12">
              <h1 className="home-thq-text-elm10">
                Ressources
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <p className="home-text111">Dernière mise à jour le 15/05/2024</p>
            </div>
            <div className="home-container13">
              <h2 className="home-thq-text-elm11"> Web </h2>
              <div className="home-container14">
                <div className="home-thq-feature-card-elm10">
                  <div className="home-container15">
                    <a
                      href="https://belux.edmo.eu/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link12"
                    >
                      <h2 className="home-text112">
                        <span>Disinfocheck by </span>
                        <span>EDMO BELUX</span>
                      </h2>
                    </a>
                    <span>
                      <span>
                        Disinfocheck est un site web d&apos;EDMO, le centre de
                        recherche consacré à la surveillance de la
                        désinformation en Belgique et au Luxembourg, qui réunit
                        des experts internationaux issus du monde universitaire,
                        de la société civile, des médias, du journalisme et du
                        fact-checking, et de l&apos;éducation aux médias.
                      </span>
                      <br></br>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Vous y trouverez les derniers fact-checks, rapports
                        d&apos;enquête, recherches universitaires, matériel
                        d&apos;éducation aux médias, ainsi que les annonces
                        d&apos;événements à venir.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm11">
                  <div className="home-container16">
                    <a
                      href="https://efcsn.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link13"
                    >
                      <h2 className="home-text122">
                        EFCSN European fact checking standards network
                      </h2>
                    </a>
                    <span>
                      <span>
                        Le European Fact-Checking Standards Network (EFCSN) est
                        un réseau européen qui rassemble et représente les
                        organisations de fact-checking engagées à respecter des
                        standards élevés de vérification de l’information et
                        d’éducation aux médias, afin de lutter contre la
                        désinformation dans l’intérêt du public.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        L’EFCSN promeut des normes professionnelles strictes en
                        évaluant les organisations de fact-checking et
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text128">
                        œuvre aussi à défendre l’intégrité de l’information en
                        Europe et à soutenir une communauté de fact-checkers
                        dynamique et collaborative.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm12">
                  <div className="home-container17">
                    <a
                      href="https://www.politifact.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link14"
                    >
                      <h2 className="home-text129">Politifact</h2>
                    </a>
                    <span>
                      <span>
                        PolitiFact est un site web américain de fact checking
                        géré par le Poynter Institute à St. Petersburg, en
                        Floride. Il a été fondé en 2007 et a remporté le prix
                        Pulitzer pour son reporting lors de l&apos;élection
                        présidentielle américaine de 2008.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        La recherche de PolitiFact repose sur des sources
                        d&apos;information primaires, telles que des agences
                        gouvernementales non partisanes, des experts externes et
                        des entretiens avec des professionnels de leur domaines.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm13">
                  <div className="home-container18">
                    <a
                      href="https://www.conspiracywatch.info"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link15"
                    >
                      <h2 className="home-text135">Conspiracy Watch</h2>
                    </a>
                    <span>
                      <span>
                        Service de presse en ligne entièrement consacré à
                        l’information sur le phénomène conspirationniste, le
                        négationnisme et leurs manifestations actuelles.
                      </span>
                      <br></br>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        Depuis 2007, Conspiracy Watch contribue à sensibiliser
                        aux dangers du complotisme en assurant un travail
                        d’information et de veille critique.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm14">
                  <div className="home-container19">
                    <a
                      href="https://www.snopes.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link16"
                    >
                      <h2 className="home-text141">Snopes</h2>
                    </a>
                    <span>
                      <span>
                        Spécialistes depuis 1994 de la vérification
                        d&apos;informations, de rumeurs et de théories en ligne.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Snopes est apprécié des chercheurs et journalistes pour
                        sa transparence, ses sources et son équipe
                        d&apos;investigation professionnelle qui vérifie
                        manuellement les rumeurs soumises.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm15">
                  <div className="home-container20">
                    <a
                      href="https://mediabiasfactcheck.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link17"
                    >
                      <h2 className="home-text147">Media Biais / Fact Check</h2>
                    </a>
                    <span>
                      <span>
                        Cette plateforme propose une analyse des biais, du
                        placement politique et de la qualité de
                        l&apos;information fournie par plus de 7700 médias,
                        journaux, journalistes et politiciens.
                      </span>
                      <br></br>
                      <span>
                        Media biais fact check est utilisée par nombre de médias
                        et chercheurs à travers le monde pour la quantité et la
                        qualité de ses données.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm16">
                  <div className="home-container21">
                    <a
                      href="https://www.disinfo.eu/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link18"
                    >
                      <h2 className="home-text153">EU Disinfo Lab</h2>
                    </a>
                    <span>
                      <span>
                        EU DisinfoLab est un thinktank qui se consacre à la
                        lutte contre les campagnes de désinformation visant
                        l&apos;UE, ses États membres, ses institutions centrales
                        et ses valeurs fondamentales. Malgré une condamnation
                        grave 
                      </span>
                      <a
                        href="https://www.liberation.fr/checknews/long-eu-disinfolab-condamnee-pour-profilage-politique-dinternautes-ayant-twitte-sur-laffaire-benalla-20220127_M73TL4BJX5HOZKXQTQKBIGMMOU/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link19"
                      >
                        en 2022 pour profilage politique et une ligne éditoriale
                        pro business, 
                      </a>
                      <span>
                        cette organisation produit un travail de pointe
                        intéressant et met en relation des experts, politiques,
                        entrepreuneurs et activistes du secteur.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm17">
                  <div className="home-container22">
                    <a
                      href="https://www.liberation.fr/checknews/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link20"
                    >
                      <h2 className="home-text158">Checknews</h2>
                    </a>
                    <span>
                      <span>
                        {' '}
                        CheckNews a été créé en septembre 2017, succédant au
                        service Désintox de Libération, qui était la première
                        rubrique de fact-checking de la presse française.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Depuis plus de trois ans, CheckNews est un service de
                        «journalisme à la demande». Ce sont les lecteurs qui ont
                        pris les commandes éditoriales, en posant des questions,
                        via une plateforme dédiée, auxquelles l&apos;équipe
                        répond.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm18">
                  <div className="home-container23">
                    <a
                      href="https://www.factcheck.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link21"
                    >
                      <h2 className="home-text164">FactCheck</h2>
                    </a>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        FactCheck est un projet du Center for Public Policy de
                        l&apos;Université de Pennsylvanie, créé pour promouvoir
                        l&apos;exactitude des déclarations des principaux
                        acteurs politiques américains dans les médias.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container24">
              <h2 className="home-thq-text-elm12"> Vidéo </h2>
              <div className="home-container25">
                <div className="home-thq-feature-card-elm19">
                  <div className="home-container26">
                    <a
                      href="https://tournesol.app/entities/yt:Z9uDmY-aj64"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link22"
                    >
                      <h2 className="home-text169">
                        Data gueule - Tout, tout, tout, vous saurez tout sur le
                        complot
                      </h2>
                    </a>
                    <span>
                      Vidéo de l&apos;émission de data journalisme Data gueule.
                      Datée de 2015 mais toujours pertinente.
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm20">
                  <div className="home-container27">
                    <a
                      href="https://www.youtube.com/playlist?list=PLv1KZC6gJTFkFmZmlejLN6qyV7gvcmXwd"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link23"
                    >
                      <h2 className="home-text171">Blast - Rhinocéros</h2>
                    </a>
                    <span>
                      La nouvelle émission de Blast de critique des médias,
                      animée par Usul et Lumi, à retrouver 3 fois par mois.
                      Rhinocéros se penche chaque semaine sur l&apos;évolution
                      de la sphère médiatique et du traitement de
                      l&apos;information à l&apos;ère des grandes chaines
                      d&apos;opinion privées.
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm21">
                  <div className="home-container28">
                    <a
                      href="https://tournesol.app/entities/yt:ZxSTXnmzbvU"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link24"
                    >
                      <h2 className="home-text173">
                        Hygiène mentale - La désinformation (pourquoi autant de
                        trucs faux sur internet)
                      </h2>
                    </a>
                    <span>
                      <span>
                        Pourquoi les gens écrivent des trucs visiblement faux
                        sur Internet ?
                      </span>
                      <br></br>
                      <span>
                        Ces quelques exemples de désinformation sont surtout un
                        prétexte pour expliquer la méthode (remonter aux
                        sources, verifier les données) et gagner un peu
                        d&apos;esprti critique.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm22">
                  <div className="home-container29">
                    <a
                      href="https://www.arte.tv/fr/videos/RC-022858/fake-news/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link25"
                    >
                      <h2 className="home-text178">Arte - Fake News</h2>
                    </a>
                    <span>
                      <span>
                        Depuis 2018, Dojd, la rédaction de la chaîne
                        d’opposition russe exilée en Géorgie, anime la chaîne
                        YouTube « FAKE NEWS ». Chaque semaine, l&apos;équipe
                        passe au crible les actualités, talk-shows et autres
                        programmes de propagande de l&apos;État russe en
                        démontant chaque ressort de la propagande pro-Poutine.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm23">
                  <div className="home-container30">
                    <a
                      href="https://www.youtube.com/watch?v=G7GaZX5JJes"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link26"
                    >
                      <h2 className="home-text182">
                        Franceinfo - L&apos;ère de la post-vérité
                      </h2>
                    </a>
                    <span>
                      <span>
                        L&apos;ultime, et excellente, chronique de Clément
                        Viktorovitch pour france info ou ce dernier revient sur
                        l&apos;état du débat public à l&apos;ère de la
                        désinformation et l&apos;indifférence à la vérité au
                        profit de l&apos;efficacité des stratégies de
                        communication.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm24">
                  <div className="home-container31">
                    <a
                      href="https://www.youtube.com/playlist?list=PLCwXWOyIR22srEjn3YI7CqXYiIB_htCjw"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link27"
                    >
                      <h2 className="home-text186">Arte - Citizen Facts</h2>
                    </a>
                    <span>
                      <span>
                        Et si pour lutter contre les fake news, il suffisait
                        d’unir nos forces ? C’est tout le pari de CITIZEN FACTS
                        !
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Une rédaction citoyenne constituée de plus d’un millier
                        de personnes à travers l’Europe s’allie à la journaliste
                        et youtubeuse Aude Favre dans des enquêtes impactantes.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm25">
                  <div className="home-container32">
                    <a
                      href="https://tournesol.app/entities/yt:Z4SOI2A7WhM"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link28"
                    >
                      <h2 className="home-text192">
                        Patchwork - Comment parler aux complotistes ?
                      </h2>
                    </a>
                    <span>
                      <span>
                        Cette vidéo nous propose de revenir sur la littérature
                        scientifique consacrée aux théories du complot. En
                        particulier, comment répondre à celles et ceux qui
                        adhèrent à ces théories.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm26">
                  <div className="home-container33">
                    <a
                      href="https://tournesol.app/entities/yt:NotAk1zhD9c"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link29"
                    >
                      <h2 className="home-text196">
                        Temps présent - Fake news, une pandémie de mensonges
                      </h2>
                    </a>
                    <span>
                      <span>
                        Une émission de la Radio television suisse qui propose
                        de comprendre les fake news par le prisme de la crise du
                        covid.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm27">
                  <div className="home-container34">
                    <a
                      href="https://www.conspiracywatch.info/les-deconspirateurs-lemission"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link30"
                    >
                      <h2 className="home-text200">
                        Les Déconspirateurs - l&apos;émission
                      </h2>
                    </a>
                    <span>
                      <span>
                        Une émission de Conspiracy watch qui observe et comment
                        périodiquement l’actualité du complotisme, de la
                        désinformation et de la haine en ligne en compagnie
                        d&apos;invités et d&apos;experts.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm28">
                  <div className="home-container35">
                    <a
                      href="https://www.conspiracywatch.info/category/radio/complorama"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link31"
                    >
                      <h2 className="home-text204">
                        France info - Complotrama le podcast
                      </h2>
                    </a>
                    <span>
                      <span>
                        Un podcast de France info et Conspiracy watch qui,
                        chaque mois, décrypte les grandes thématiques du
                        conspirationnisme.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm29">
                  <div className="home-container36">
                    <a
                      href="https://www.youtube.com/playlist?list=PLCwXWOyIR22s39iU3jz3ik5f_0GtNGnoj"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link32"
                    >
                      <h2 className="home-text208">Arte - Desintox</h2>
                    </a>
                    <span>
                      <span>
                        En collaboration avec libération, Desintox passe au
                        radar l&apos;actu, et démêle le vrai du faux.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm30">
                  <div className="home-container37">
                    <a
                      href="https://www.youtube.com/watch?v=Hug0rfFC_L8"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link33"
                    >
                      <h2 className="home-text212">
                        Kurzgesagt - the ultimate conspiracy debunker
                      </h2>
                    </a>
                    <span>
                      Un rapide guide humoristique pour apprendre à débunker les
                      théories du complot
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm31">
                  <div className="home-container38">
                    <a
                      href="https://www.youtube.com/@InfoouMytho/featured"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link34"
                    >
                      <h2 className="home-text214">Info ou mytho ?</h2>
                    </a>
                    <span>
                      Info ou Mytho ?, c&apos;est la chaîne d&apos;esprit
                      critique pour les ados... et les plus grands : biais
                      cognitifs, théories du complot, éducation aux médias et à
                      l&apos;information, conséquences des fake news dans
                      l&apos;actu, interviews de youtubeurs luttant contre la
                      désinformation, etc.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container39">
              <h2 className="home-thq-text-elm13"> Outils pédagogiques </h2>
              <div className="home-container40">
                <div className="home-thq-feature-card-elm32">
                  <div className="home-container41">
                    <a
                      href="https://chromewebstore.google.com/detail/search-by-image/cnojnbdhbhnkbcieeekonklommdnndci"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link35"
                    >
                      <h2 className="home-text216">Search by image</h2>
                    </a>
                    <span>
                      <span>
                        Search by Image est une extension de navigateur qui
                        permet d&apos;effectuer en 2 clics des recherches
                        inversées d&apos;images sur plus de 30 moteurs de
                        recherche a travers le monde.
                      </span>
                      <br></br>
                      <span>
                        Cette extension open source est particulièrement utile
                        pour déterminer l&apos;origine d&apos;une photo de
                        profil, d&apos;une image relayée sur les réseaux ou
                        encore d&apos;un produit sur une site de vente.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm33">
                  <div className="home-container42">
                    <a
                      href="https://verificationhandbook.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link36"
                    >
                      <h2 className="home-text221">Verification handbook</h2>
                    </a>
                    <span>
                      <span>
                        Rédigé par des journalistes de la BBC, de Storyful,
                        d&apos;ABC, de Digital First Media et d&apos;autres
                        experts en fact checking, le manuel de vérification est
                        un guide complet disponible en plusieurs langues pour
                        aider les journalistes et les citoyens à lutter contre
                        la désinformation.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Il fournit les outils, les techniques et les lignes
                        directrices étape par étape pour traiter les contenus
                        générés par les utilisateurs (CGU) dans les situations
                        d&apos;urgence.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm34">
                  <div className="home-container43">
                    <a
                      href="https://scanner.deepware.ai/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link37"
                    >
                      <h2 className="home-text226">Deepware</h2>
                    </a>
                    <span>
                      <span>
                        Deepware est une entreprise turque spécialisée dans la
                        cybersécurité, axée sur la détection des deepfakes.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        La plateforme Deepware Scanner offre un outil de
                        détection des deepfakes simple d&apos;utilisation qui
                        permet de vérifier l&apos;authenticité des vidéos et des
                        contenus audio avant de les partager ou de les publier.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm35">
                  <div className="home-container44">
                    <a
                      href="https://app.illuminarty.ai/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link38"
                    >
                      <h2 className="home-text231">Illuminarty</h2>
                    </a>
                    <span>
                      <span>
                        Illuminarty propose des services de détection de
                        contenus générés par l&apos;IA. Elle combine divers
                        algorithmes de vision par ordinateur pour fournir la
                        probabilité qu&apos;une image ait été générée à partir
                        d&apos;un modèle d&apos;IA public.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm36">
                  <div className="home-container45">
                    <a
                      href="https://29a.ch/photo-forensics/#forensic-magnifier"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link39"
                    >
                      <h2 className="home-text235">Forensically</h2>
                    </a>
                    <span>
                      <span>
                        Forensically est un outil en ligne gratuit pour
                        l&apos;analyse d&apos;image numérique. Il comprend des
                        fonctionnalités telles que la détection de clones,
                        l&apos;analyse du niveau d&apos;erreur et
                        l&apos;extraction de métadonnées.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        L&apos;outil est conçu pour aider les utilisateurs à
                        voir des détails qui seraient autrement cachés,
                        similaire à une loupe.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm37">
                  <div className="home-container46">
                    <a
                      href="https://lie-detectors.org/fr/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link40"
                    >
                      <h2 className="home-text240">Lie detector</h2>
                    </a>
                    <span>
                      <span>
                        Lie Detectors est une organisation à but non lucratif
                        qui aide les enfants et les adolescents à mieux
                        reconnaître et évaluer les informations qui remplissent
                        de plus en plus leurs comptes Instagram, Snapchat,
                        YouTube et WhatsApp.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Ils organisent des sessions en classe en Autriche, en
                        Belgique, en Allemagne, au Luxembourg, en Pologne et en
                        Suisse. Des ateliers de formation des enseignants sont
                        disponibles à l&apos;échelle internationale sur demande,
                        dispensés en personne ou à distance.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm38">
                  <div className="home-container47">
                    <a
                      href="https://versustheinternet.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link41"
                    >
                      <h2 className="home-text245">You vs the internet</h2>
                    </a>
                    <span>
                      You VS the Internet est un outil pédagogique/jeu qui vise
                      à aider les gens à distinguer la vérité de la fiction
                      lorsqu&apos;il s&apos;agit d&apos;informations en ligne.
                      L&apos;objectif est d&apos;accroître les connaissances du
                      public en matière de désinformation. Il a été créé et
                      partagé par Digital Public Square, une organisation à but
                      non lucratif qui se consacre à repenser et à redéfinir la
                      manière dont la technologie est utilisée pour soutenir les
                      communautés.
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm39">
                  <div className="home-container48">
                    <a
                      href="https://www.csem.be/eduquer-aux-medias/productions"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link42"
                    >
                      <h2 className="home-text247">Publications du CSEM</h2>
                    </a>
                    <span>
                      Le Conseil supérieur de l’éducation aux médias (fédération
                      wallonie bruxelles) a édité un vaste panel d’outils et de
                      brochures à l&apos;usage des professionnels de
                      l&apos;éducation, des formateurs, des parents... La
                      plupart des brochures présentées dans cette section
                      peuvent être téléchargées ou commandées gratuitement.
                    </span>
                  </div>
                </div>
                <div className="home-thq-feature-card-elm40">
                  <div className="home-container49">
                    <a
                      href="https://www.ritimo.org/S-informer-decrypter-participer"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link43"
                    >
                      <h2 className="home-text249">
                        S&apos;informer, décrypter, participer
                      </h2>
                    </a>
                    <span>
                      Ce guide revient sur la fabrication de l’information : qui
                      détient les médias ? Quelles sont les pressions et les
                      menaces qui s’exercent sur les journalistes ? Il analyse
                      également les bouleversements produits par Internet, cet
                      outil porteur de risques pour le droit à l’information
                      mais aux potentialités immenses pour l’expression des
                      minorités et des discriminé·es.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container50">
              <h2 className="home-thq-text-elm14"> Ouvrages </h2>
              <div className="home-container51">
                <div className="home-thq-feature-card-elm41">
                  <div className="home-container52">
                    <p className="home-text251">
                      <span>
                        Kenzo Nera, Complotisme et quête identitaire. Puf, 2023
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Zuboff, Shoshana. L&apos;âge du capitalisme de
                        surveillance. Éditions du Seuil, 2020
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Aral, Sinan. The Hype Machine: How Social Media Disrupts
                        Our Elections, Our Economy, and Our Health--and How We
                        Must Adapt. Currency, 2020.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Antoine Vitkine, Les Nouveaux Imposteurs, Paris, La
                        Martinière, 2005
                      </span>
                      <br className="home-text262"></br>
                      <br></br>
                      <span>
                        Aurélie Ledoux, Frédérique Leichter-Flack et Philippe
                        Zard (dir.), Complot et terreur imaginaires politiques 
                      </span>
                      <span>
                        de la peur, Rennes, Presses universitaires de Rennes (no
                        16), juin 2012
                      </span>
                      <br className="home-text266"></br>
                      <br></br>
                      <span>
                        Emmanuel Kreis, Les puissances de l’ombre : juifs,
                        jésuites, francs-maçons, réactionnaires, la théorie du
                        complot 
                      </span>
                      <span>dans les textes, Paris, CNRS éd, 2008</span>
                      <br className="home-text270"></br>
                      <br></br>
                      <span>
                        Frédéric Charpier, L’obsession du complot, Paris, Bourin
                        éditeur, 2005
                      </span>
                      <br className="home-text273"></br>
                      <br></br>
                      <span>
                        Frédéric Jameson, La totalité comme complot :
                        conspiration et paranoïa dans l’imaginaire contemporain,
                        Paris, Prairies 
                      </span>
                      <span>ordinaires, 2007</span>
                      <br className="home-text277"></br>
                      <br></br>
                      <span>
                        Jack Z. Bratich, Conspiracy panics: political
                        rationality and popular culture, Albany, N.Y, State
                        University of New York Press, 2008
                      </span>
                      <br className="home-text280"></br>
                      <br></br>
                      <span>
                        Gérald Bronner, La démocratie des crédules, Paris, PUF,
                        2013
                      </span>
                      <br className="home-text283"></br>
                      <br></br>
                      <span>
                        Laurent Bazin et Pierre-Henri Tavoillot, Tous paranos ?
                        Pourquoi nous aimons tant les complots, La
                        Tour-d’Aigues, Éd. de l’Aube, 
                      </span>
                      <span>coll. “Monde en cours”, 2012</span>
                      <br className="home-text287"></br>
                      <br></br>
                      <span>
                        Luc Boltanski, Enigmes et complots : Une enquête à
                        propos d’enquêtes, Paris, Gallimard, 2012
                      </span>
                      <br className="home-text290"></br>
                      <br></br>
                      <span>
                        Marc Jacquemin et Jérôme Jamin L’histoire que nous
                        faisons. Contre les théories de la manipulation,
                      </span>
                      <br className="home-text293"></br>
                      <br></br>
                      <span>
                        Éditions Labor / Éditions Espace de Libertés, 2007
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br className="home-text296"></br>
                      <br></br>
                      <span>
                        Nicolas Chevassus-au-Louis, Théories du complot. On nous
                        cache tout, on nous dit rien, Paris, First Editions,
                        2014
                      </span>
                      <br className="home-text299"></br>
                      <br></br>
                      <span>
                        Pièces et main d’œuvre, “L’invention de la théorie du
                        complot ou les aveux de la sociologie libérale”, dans
                        Terreur et Possession, 
                      </span>
                      <span>
                        enquête sur la police des populations à l’ère
                        technologique, Paris, éd. L’Échappée, 2008
                      </span>
                      <br className="home-text303"></br>
                      <br></br>
                      <span>
                        Pierre-André Taguieff, La foire aux illuminés :
                        ésotérisme, théorie du complot, extrémisme, Paris, Mille
                        et une nuits, 2005
                      </span>
                      <br className="home-text306"></br>
                      <br></br>
                      <span>
                        Pierre-André Taguieff, L’imaginaire du complot mondial :
                        aspects d’un mythe moderne, Paris, Éd. Mille et une
                        nuits, 2006 
                      </span>
                      <br className="home-text309"></br>
                      <br></br>
                      <span>
                        Richard Hofstadter, Le style paranoïaque. Théories du
                        complot et droite radicale en Amérique, Paris, F.
                        Bourin, 2012
                      </span>
                      <br className="home-text312"></br>
                      <br></br>
                      <span>
                        Rob Brotherton, Suspicious Minds: Why we believe
                        conspiracies, Bloomsbury, 2015
                      </span>
                      <br className="home-text315"></br>
                      <br></br>
                      <span>
                        Sophie Mazet, Manuel d’autodéfense intellectuelle,
                        Paris, Robert Laffont Éditions, 2015
                      </span>
                      <br className="home-text318"></br>
                      <br></br>
                      <span>
                        Véronique Campion-Vincent, La Société parano : Théories
                        du complot, menaces et incertitudes, Paris, Payot &amp;
                        Rivages, 2007
                      </span>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="home-thq-about-elm">
          <h1 className="home-thq-text-elm15">Pourquoi ce projet ?</h1>
          <div className="home-container53">
            <span>
              <span>
                Ce site a été développé dans le cadre d&apos;une série
                d&apos;animation autour des conflits internationaux et de la
                désinformation proposées par
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://www.facebook.com/justicepaix"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link44"
              >
                la branche Bruxelloise de l&apos;ONG Justice &amp; Paix
              </a>
              <span className="home-text323">.</span>
              <br></br>
            </span>
            <span>
              <span>
                Les différentes ressources présentées ci-dessus ne prétendent en
                aucun cas offrir une vision exhaustive et objective de
                l&apos;ensemble des initiatives contre la désinformation à
                travers le monde.
              </span>
              <br></br>
              <span>
                Cette plateforme est simplement le reflet de la volonté
                d&apos;un citoyen bénévole de proposer différentes ressources
                pertinentes aux intéressés. 
              </span>
              <br></br>
              <span>
                Pour un travail similaire et plus académique, je vous renvoie
                vers
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text330">l&apos;excellent </span>
              <span className="home-text331">upgrade democracy</span>
              <span className="home-text332">.</span>
              <br></br>
            </span>
            <span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                Ce site sera mis à jour au gré de mes trouvailles et recherches.
                Pour toutes corrections, suggestion ou demandes vous pouvez me
                contacter à 
              </span>
              <a
                href="mailto:demystificator@hworld.one?subject="
                className="home-link45"
              >
                demystificator@hworld.one
              </a>
              <span className="home-text336">.</span>
              <br></br>
            </span>
            <span>
              <span>
                En espérant vous avoir offert de quoi affuter votre esprit
                critique en ces temps bien gris,
              </span>
              <span> </span>
              <span>
                je vous laisse sur
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text341">ces </span>
              <a
                href="https://youtu.be/qN1ZaFtIBuI?t=1803"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link46"
              >
                belles paroles de Nassim Haram
              </a>
              <a
                href="https://youtu.be/qN1ZaFtIBuI?t=1803"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link47"
              >
                ein
              </a>
              <span>.</span>
              <br></br>
              <br></br>
              <br></br>
              <span className="home-text346">Thielen Oscar</span>
              <br></br>
            </span>
          </div>
        </div>
        <footer className="home-thq-footer-elm">
          <div className="home-thq-content-elm">
            <span className="home-text348">Made with 🔥 and coffee </span>
          </div>
        </footer>
        <a href="https://play.teleporthq.io/signup" className="home-link48">
          <div aria-label="Sign up to TeleportHQ" className="home-container54">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon3"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text349">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-thq-navbar-elm {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-thq-navbar-interactive-elm {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-thq-branding-elm1 {
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            border-color: #61616b;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-text100 {
            color: rgb(39, 39, 45);
            width: auto;
            font-size: 36px;
            font-style: normal;
            font-weight: 400;
          }
          .home-thq-desktop-menu-elm {
            display: flex;
          }
          .home-thq-nav-elm1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-thq-right-elm {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .home-link10 {
            display: contents;
          }
          .home-thq-nav-links-elm {
            text-decoration: none;
          }
          .home-thq-button-elm {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-work-with-us-elm1 {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-unit);
            background-color: rgb(229, 254, 88);
          }
          .home-thq-work-with-us-elm1:hover {
            opacity: 0.5;
          }
          .home-link11 {
            display: flex;
            font-size: 24px;
            text-decoration: none;
          }
          .home-image1 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-thq-burger-menu-elm {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-thq-work-with-us-elm2 {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-unit);
            background-color: rgb(229, 254, 88);
          }
          .home-thq-work-with-us-elm2:hover {
            opacity: 0.5;
          }
          .home-text101 {
            display: flex;
            font-size: 24px;
          }
          .home-image2 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-thq-mobile-menu-elm {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-thq-nav-elm2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-top-elm {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-thq-branding-elm2 {
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            border-color: #61616b;
            flex-direction: row;
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-text102 {
            color: #27272d;
            font-size: 30px;
            font-family: Inter;
          }
          .home-thq-menu-close-elm {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-thq-middle-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-links-elm {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-link-elm {
            text-decoration: none;
          }
          .home-thq-work-with-us-elm3 {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: rgb(229, 254, 88);
          }
          .home-thq-work-with-us-elm3:hover {
            opacity: 0.5;
          }
          .home-text103 {
            display: flex;
            font-size: 24px;
          }
          .home-thq-hero-elm {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: 140px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 140px;
          }
          .home-thq-header-elm {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text104 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25;
          }
          .home-text106 {
            background-color: rgb(229, 254, 88);
          }
          .home-text107 {
            background-color: rgb(229, 254, 88);
          }
          .home-text109 {
            background-color: rgb(229, 254, 88);
          }
          .home-thq-hero-image-elm {
            width: 100%;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: 180px;
            padding-right: 180px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            background-color: #e5fe58;
          }
          .home-image3 {
            width: 640px;
            height: 540px;
            object-fit: cover;
          }
          .home-thq-explore-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            border-color: #61616b;
            border-width: 0px;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
            border-top-width: 1px;
          }
          .home-container11 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container12 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-thq-text-elm10 {
            width: 712px;
            font-size: 54px;
            max-width: 800px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .home-text111 {
            opacity: 0.9;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .home-container13 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-text-elm11 {
            width: auto;
            height: var(--dl-layout-size-small);
            font-size: 40px;
            max-width: 800px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            border-color: var(--dl-color-gray-500);
            border-width: 0px;
            background-color: rgb(229, 254, 88);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container14 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-feature-card-elm10 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm10:hover {
            border-color: #e5fe58;
          }
          .home-container15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link12 {
            display: contents;
          }
          .home-text112 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            text-decoration: none;
          }

          .home-thq-feature-card-elm11 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm11:hover {
            border-color: #e5fe58;
          }
          .home-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link13 {
            display: contents;
          }
          .home-text122 {
            font-style: normal;
            font-weight: 600;
          }
          .home-text128 {
            font-size: inherit;
          }
          .home-thq-feature-card-elm12 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm12:hover {
            border-color: #e5fe58;
          }
          .home-container17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link14 {
            display: contents;
          }
          .home-text129 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm13 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm13:hover {
            border-color: #e5fe58;
          }
          .home-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link15 {
            display: contents;
          }
          .home-text135 {
            font-weight: 600;
          }
          .home-thq-feature-card-elm14 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm14:hover {
            border-color: #e5fe58;
          }
          .home-container19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link16 {
            display: contents;
          }
          .home-text141 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm15 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm15:hover {
            border-color: #e5fe58;
          }
          .home-container20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link17 {
            display: contents;
          }
          .home-text147 {
            font-style: normal;
            font-weight: 600;
          }
          .home-thq-feature-card-elm16 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm16:hover {
            border-color: #e5fe58;
          }
          .home-container21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link18 {
            display: contents;
          }
          .home-text153 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm17 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm17:hover {
            border-color: #e5fe58;
          }
          .home-container22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link20 {
            display: contents;
          }
          .home-text158 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm18 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm18:hover {
            border-color: #e5fe58;
          }
          .home-container23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link21 {
            display: contents;
          }
          .home-text164 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-container24 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-text-elm12 {
            width: auto;
            height: var(--dl-layout-size-small);
            font-size: 40px;
            max-width: 800px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            border-color: var(--dl-color-gray-500);
            border-width: 0px;
            background-color: rgb(229, 254, 88);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container25 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-feature-card-elm19 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm19:hover {
            border-color: #e5fe58;
          }
          .home-container26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link22 {
            display: contents;
          }
          .home-text169 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm20 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm20:hover {
            border-color: #e5fe58;
          }
          .home-container27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link23 {
            display: contents;
          }
          .home-text171 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm21 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm21:hover {
            border-color: #e5fe58;
          }
          .home-container28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link24 {
            display: contents;
          }
          .home-text173 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm22 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm22:hover {
            border-color: #e5fe58;
          }
          .home-container29 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link25 {
            display: contents;
          }
          .home-text178 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm23 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm23:hover {
            border-color: #e5fe58;
          }
          .home-container30 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link26 {
            display: contents;
          }
          .home-text182 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm24 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm24:hover {
            border-color: #e5fe58;
          }
          .home-container31 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link27 {
            display: contents;
          }
          .home-text186 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm25 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm25:hover {
            border-color: #e5fe58;
          }
          .home-container32 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link28 {
            display: contents;
          }
          .home-text192 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm26 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm26:hover {
            border-color: #e5fe58;
          }
          .home-container33 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link29 {
            display: contents;
          }
          .home-text196 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm27 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm27:hover {
            border-color: #e5fe58;
          }
          .home-container34 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link30 {
            display: contents;
          }
          .home-text200 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm28 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm28:hover {
            border-color: #e5fe58;
          }
          .home-container35 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link31 {
            display: contents;
          }
          .home-text204 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm29 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm29:hover {
            border-color: #e5fe58;
          }
          .home-container36 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link32 {
            display: contents;
          }
          .home-text208 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm30 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm30:hover {
            border-color: #e5fe58;
          }
          .home-container37 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link33 {
            display: contents;
          }
          .home-text212 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm31 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm31:hover {
            border-color: #e5fe58;
          }
          .home-container38 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link34 {
            display: contents;
          }
          .home-text214 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-container39 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-text-elm13 {
            width: auto;
            height: var(--dl-layout-size-small);
            font-size: 40px;
            max-width: 800px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            border-color: var(--dl-color-gray-500);
            border-width: 0px;
            background-color: rgb(229, 254, 88);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container40 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-feature-card-elm32 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm32:hover {
            border-color: #e5fe58;
          }
          .home-container41 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link35 {
            display: contents;
          }
          .home-text216 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm33 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm33:hover {
            border-color: #e5fe58;
          }
          .home-container42 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link36 {
            display: contents;
          }
          .home-text221 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm34 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm34:hover {
            border-color: #e5fe58;
          }
          .home-container43 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link37 {
            display: contents;
          }
          .home-text226 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm35 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm35:hover {
            border-color: #e5fe58;
          }
          .home-container44 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link38 {
            display: contents;
          }
          .home-text231 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm36 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm36:hover {
            border-color: #e5fe58;
          }
          .home-container45 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link39 {
            display: contents;
          }
          .home-text235 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm37 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm37:hover {
            border-color: #e5fe58;
          }
          .home-container46 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link40 {
            display: contents;
          }
          .home-text240 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm38 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm38:hover {
            border-color: #e5fe58;
          }
          .home-container47 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link41 {
            display: contents;
          }
          .home-text245 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm39 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm39:hover {
            border-color: #e5fe58;
          }
          .home-container48 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link42 {
            display: contents;
          }
          .home-text247 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-thq-feature-card-elm40 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-feature-card-elm40:hover {
            border-color: #e5fe58;
          }
          .home-container49 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link43 {
            display: contents;
          }
          .home-text249 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-container50 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-text-elm14 {
            width: auto;
            height: var(--dl-layout-size-small);
            font-size: 40px;
            max-width: 800px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            border-color: var(--dl-color-gray-500);
            border-width: 0px;
            background-color: rgb(229, 254, 88);
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container51 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-feature-card-elm41 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 2px;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 2px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container52 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text251 {
            font-weight: 400;
          }
          .home-text262 {
            font-weight: 400;
          }
          .home-text266 {
            font-weight: 400;
          }
          .home-text270 {
            font-weight: 400;
          }
          .home-text273 {
            font-weight: 400;
          }
          .home-text277 {
            font-weight: 400;
          }
          .home-text280 {
            font-weight: 400;
          }
          .home-text283 {
            font-weight: 400;
          }
          .home-text287 {
            font-weight: 400;
          }
          .home-text290 {
            font-weight: 400;
          }
          .home-text293 {
            font-weight: 400;
          }
          .home-text296 {
            font-weight: 400;
          }
          .home-text299 {
            font-weight: 400;
          }
          .home-text303 {
            font-weight: 400;
          }
          .home-text306 {
            font-weight: 400;
          }
          .home-text309 {
            font-weight: 400;
          }
          .home-text312 {
            font-weight: 400;
          }
          .home-text315 {
            font-weight: 400;
          }
          .home-text318 {
            font-weight: 400;
          }
          .home-thq-about-elm {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            border-color: #61616b;
            border-style: solid;
            border-width: 2px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-thq-text-elm15 {
            width: 712px;
            font-size: 54px;
            max-width: 800px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .home-container53 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link44 {
            text-decoration: underline;
          }
          .home-text331 {
            text-decoration: underline;
          }
          .home-link45 {
            text-decoration: underline;
          }
          .home-text341 {
            text-decoration: underline;
          }
          .home-link46 {
            text-decoration: underline;
          }
          .home-link47 {
            text-decoration: underline;
          }
          .home-thq-footer-elm {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #61616b;
            border-width: 0px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-top-width: 1px;
          }
          .home-thq-content-elm {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #61616b;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          .home-link48 {
            display: contents;
          }
          .home-container54 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon3 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text349 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .home-thq-navbar-interactive-elm {
              gap: var(--dl-layout-space-fourunits);
              justify-content: center;
            }
            .home-link11 {
              line-height: 30px;
            }
            .home-text101 {
              line-height: 30px;
            }
            .home-text103 {
              line-height: 30px;
            }
            .home-thq-hero-elm {
              gap: var(--dl-layout-space-fourunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-text104 {
              color: rgb(39, 39, 45);
              font-size: 32px;
              font-style: normal;
              font-weight: 400;
              line-height: 1.25;
            }
            .home-text106 {
              background-color: rgb(229, 254, 88);
            }
            .home-text107 {
              background-color: rgb(229, 254, 88);
            }
            .home-text109 {
              background-color: rgb(229, 254, 88);
            }
            .home-thq-hero-image-elm {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-thq-explore-elm {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
              border-top-width: 0px;
            }
            .home-thq-text-elm10 {
              font-size: 32px;
            }
            .home-text111 {
              font-style: normal;
              font-weight: 400;
            }
            .home-thq-text-elm11 {
              font-size: 32px;
            }
            .home-link19 {
              text-decoration: underline;
            }
            .home-thq-text-elm12 {
              font-size: 32px;
            }
            .home-text200 {
              text-decoration: none;
            }
            .home-thq-text-elm13 {
              font-size: 32px;
            }
            .home-text231 {
              text-decoration: none;
            }
            .home-thq-text-elm14 {
              font-size: 32px;
            }
            .home-thq-about-elm {
              gap: var(--dl-layout-space-fourunits);
              height: auto;
              margin-bottom: 0px;
              animation-name: none;
              padding-bottom: 120px;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-thq-text-elm15 {
              font-size: 32px;
              font-style: normal;
              font-weight: 400;
            }
            .home-container53 {
              width: auto;
              height: auto;
              align-self: flex-start;
            }
            .home-link44 {
              text-decoration: inherit;
              background-color: rgb(229, 254, 88);
            }
            .home-text323 {
              text-decoration: inherit;
            }
            .home-text330 {
              color: var(--dl-color-gray-black);
            }
            .home-text331 {
              color: var(--dl-color-gray-black);
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-text332 {
              color: var(--dl-color-gray-black);
            }
            .home-link45 {
              color: var(--dl-color-gray-black);
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-text336 {
              color: var(--dl-color-gray-black);
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-link46 {
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-link47 {
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-text346 {
              text-transform: capitalize;
            }
            .home-thq-footer-elm {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-content-elm {
              gap: var(--dl-layout-space-threeunits);
              align-self: center;
              align-items: flex-start;
              padding-top: var(--dl-layout-space-threeunits);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-text348 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .home-thq-navbar-interactive-elm {
              padding-top: var(--dl-layout-space-twounits);
              justify-content: space-between;
            }
            .home-thq-desktop-menu-elm {
              display: none;
            }
            .home-thq-work-with-us-elm1 {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-link11 {
              display: none;
            }
            .home-image1 {
              width: 16px;
              height: 14px;
              display: flex;
            }
            .home-thq-burger-menu-elm {
              display: flex;
              align-self: flex-start;
            }
            .home-thq-work-with-us-elm2 {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-text101 {
              display: none;
            }
            .home-image2 {
              width: 16px;
              height: 14px;
              display: flex;
            }
            .home-thq-branding-elm2 {
              max-width: 80%;
            }
            .home-text102 {
              color: rgb(39, 39, 45);
              font-size: 30px;
              font-family: Inter;
            }
            .home-thq-work-with-us-elm3 {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-text103 {
              font-size: 24px;
              line-height: 30px;
            }
            .home-image3 {
              width: auto;
              height: 220px;
            }
            .home-thq-feature-card-elm10 {
              flex-direction: row;
            }
            .home-container15 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm11 {
              flex-direction: row;
            }
            .home-container16 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm12 {
              flex-direction: row;
            }
            .home-container17 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm13 {
              flex-direction: row;
            }
            .home-container18 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm14 {
              flex-direction: row;
            }
            .home-container19 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm15 {
              flex-direction: row;
            }
            .home-container20 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm16 {
              flex-direction: row;
            }
            .home-container21 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm17 {
              flex-direction: row;
            }
            .home-container22 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm18 {
              flex-direction: row;
            }
            .home-container23 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm19 {
              flex-direction: row;
            }
            .home-container26 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm20 {
              flex-direction: row;
            }
            .home-container27 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm21 {
              flex-direction: row;
            }
            .home-container28 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm22 {
              flex-direction: row;
            }
            .home-container29 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm23 {
              flex-direction: row;
            }
            .home-container30 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm24 {
              flex-direction: row;
            }
            .home-container31 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm25 {
              flex-direction: row;
            }
            .home-container32 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm26 {
              flex-direction: row;
            }
            .home-container33 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm27 {
              flex-direction: row;
            }
            .home-container34 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm28 {
              flex-direction: row;
            }
            .home-container35 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm29 {
              flex-direction: row;
            }
            .home-container36 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm30 {
              flex-direction: row;
            }
            .home-container37 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm31 {
              flex-direction: row;
            }
            .home-container38 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm32 {
              flex-direction: row;
            }
            .home-container41 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm33 {
              flex-direction: row;
            }
            .home-container42 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm34 {
              flex-direction: row;
            }
            .home-container43 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm35 {
              flex-direction: row;
            }
            .home-container44 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm36 {
              flex-direction: row;
            }
            .home-container45 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm37 {
              flex-direction: row;
            }
            .home-container46 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm38 {
              flex-direction: row;
            }
            .home-container47 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm39 {
              flex-direction: row;
            }
            .home-container48 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm40 {
              flex-direction: row;
            }
            .home-container49 {
              flex-direction: column;
            }
            .home-thq-feature-card-elm41 {
              flex-direction: row;
            }
            .home-container52 {
              flex-direction: column;
            }
            .home-thq-about-elm {
              height: auto;
              margin-bottom: 0px;
              padding-bottom: 120px;
            }
          }
          @media (max-width: 479px) {
            .home-thq-navbar-interactive-elm {
              flex-wrap: wrap;
            }
            .home-thq-mobile-menu-elm {
              padding: 16px;
            }
            .home-thq-explore-elm {
              border-top-width: 1px;
            }
            .home-container15 {
              flex-direction: column;
            }
            .home-container16 {
              flex-direction: column;
            }
            .home-container17 {
              flex-direction: column;
            }
            .home-container18 {
              flex-direction: column;
            }
            .home-container19 {
              flex-direction: column;
            }
            .home-container20 {
              flex-direction: column;
            }
            .home-container21 {
              flex-direction: column;
            }
            .home-container22 {
              flex-direction: column;
            }
            .home-container23 {
              flex-direction: column;
            }
            .home-container26 {
              flex-direction: column;
            }
            .home-container27 {
              flex-direction: column;
            }
            .home-container28 {
              flex-direction: column;
            }
            .home-container29 {
              flex-direction: column;
            }
            .home-container30 {
              flex-direction: column;
            }
            .home-container31 {
              flex-direction: column;
            }
            .home-container32 {
              flex-direction: column;
            }
            .home-container33 {
              flex-direction: column;
            }
            .home-container34 {
              flex-direction: column;
            }
            .home-container35 {
              flex-direction: column;
            }
            .home-container36 {
              flex-direction: column;
            }
            .home-container37 {
              flex-direction: column;
            }
            .home-container38 {
              flex-direction: column;
            }
            .home-container41 {
              flex-direction: column;
            }
            .home-container42 {
              flex-direction: column;
            }
            .home-container43 {
              flex-direction: column;
            }
            .home-container44 {
              flex-direction: column;
            }
            .home-container45 {
              flex-direction: column;
            }
            .home-container46 {
              flex-direction: column;
            }
            .home-container47 {
              flex-direction: column;
            }
            .home-container48 {
              flex-direction: column;
            }
            .home-container49 {
              flex-direction: column;
            }
            .home-container52 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
