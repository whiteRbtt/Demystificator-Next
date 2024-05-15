import React from 'react'
import Head from 'next/head'

import NavLinks from '../components/nav-links'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Demystificator</title>
          <meta property="og:title" content="Demystificator" />
        </Head>
        <div className="home-navbar">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-branding">
              <span className="home-text">Demystificator</span>
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <div className="home-right">
                  <a href="#about" className="home-link">
                    <NavLinks
                      link1="à propos"
                      rootClassName="nav-links-root-class-name"
                      className="home-nav-links"
                    ></NavLinks>
                  </a>
                  <div className="home-button">
                    <button className="home-work-with-us button">
                      <a href="#explore" className="home-link01">
                        explorer
                      </a>
                      <img
                        alt="image"
                        src="/hamburger.svg"
                        className="home-image"
                      />
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <button className="home-work-with-us1 button">
                <span className="home-text001">work with us</span>
                <img alt="image" src="/hamburger.svg" className="home-image1" />
              </button>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-top">
                  <div className="home-branding1">
                    <span className="home-text002">Demystificator</span>
                  </div>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-middle"
                >
                  <div className="home-links">
                    <a href="#about" className="home-link02 navLink">
                      à propos
                    </a>
                  </div>
                  <a href="#explore" className="home-work-with-us2 button">
                    <span className="home-text003">explorer</span>
                  </a>
                </nav>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="home-header">
            <h1 className="home-text004">
              <span>
                Une collection de ressources et outils pour lutter contre les 
              </span>
              <span className="home-text006"> </span>
              <span className="home-text007">fake news </span>
              <span> et la </span>
              <span className="home-text009"> désinformation </span>
              <span> en ligne.</span>
            </h1>
          </div>
          <div className="home-hero-image">
            <img alt="image" src="/computer.svg" className="home-image2" />
          </div>
        </div>
        <div id="explore" className="home-explore">
          <div className="home-container01">
            <div className="home-container02">
              <h1 className="home-text011">
                Ressources
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <p className="home-text012">Dernière mise à jour le 15/05/2024</p>
            </div>
            <div className="home-container03">
              <h2 className="home-text013"> Web </h2>
              <div className="home-container04">
                <div className="home-feature-card">
                  <div className="home-container05">
                    <a
                      href="https://www.conspiracywatch.info"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link03"
                    >
                      <h2 className="home-text014">Conspiracy Watch</h2>
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
                <div className="home-feature-card01">
                  <div className="home-container06">
                    <a
                      href="https://www.snopes.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link04"
                    >
                      <h2 className="home-text020">Snopes</h2>
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
                <div className="home-feature-card02">
                  <div className="home-container07">
                    <a
                      href="https://www.hoaxbuster.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link05"
                    >
                      <h2 className="home-text026">
                        <span>Hoaxbus</span>
                        <span>ter</span>
                      </h2>
                    </a>
                    <span>
                      Plateforme collaborative de lutte contre la désinformation
                      et de vérification de rumeurs en activité depuis 2000.
                    </span>
                  </div>
                </div>
                <div className="home-feature-card03">
                  <div className="home-container08">
                    <a
                      href="https://mediabiasfactcheck.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link06"
                    >
                      <h2 className="home-text030">Media Biais / Fact Check</h2>
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
                        et chercheurs à travers le monde pour la masse et la
                        qualité de ses données.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-feature-card04">
                  <div className="home-container09">
                    <a
                      href="https://www.disinfo.eu/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link07"
                    >
                      <h2 className="home-text036">EU Disinfo Lab</h2>
                    </a>
                    <span>
                      <span>
                        EU DisinfoLab est une organisation indépendante à but
                        non lucratif qui se consacre à la lutte contre les
                        campagnes de désinformation sophistiquées visant
                        l&apos;UE, ses États membres, ses institutions centrales
                        et ses valeurs fondamentales. Malgré une
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://www.liberation.fr/checknews/long-eu-disinfolab-condamnee-pour-profilage-politique-dinternautes-ayant-twitte-sur-laffaire-benalla-20220127_M73TL4BJX5HOZKXQTQKBIGMMOU/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link08"
                      >
                        condamnation en 2022 pour profilage politique
                      </a>
                      <span>
                        , cette ONG réalise un travail de qualité et fait office
                        de passerelle entre experts, politiques et activistes du
                        secteur.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-feature-card05">
                  <div className="home-container10">
                    <a
                      href="https://upgradedemocracy.de/en/global-overview-good-practices-to-counter-disinformation/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link09"
                    >
                      <h2 id="update_dem" className="home-text041">
                        Upgrade democracy
                      </h2>
                    </a>
                    <span>
                      <span>
                        Upgrade democracy est une étude internationale, menée de
                        2023 à 2024 qui a permis de dresser une cartographie des
                        efforts de lutte contre la désinformation dans le monde.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Plus de 200 initiatives, outils et organisations ont été
                        identifiés, mettant en lumière les différentes approches
                        utilisées à travers le monde pour contrer ce phénomène. 
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-feature-card06">
                  <div className="home-container11">
                    <a
                      href="https://belux.edmo.eu/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link10"
                    >
                      <h2 className="home-text047">
                        <span>Disinfocheck by </span>
                        <span>EDMO BELUX</span>
                      </h2>
                    </a>
                    <span>
                      <span>
                        Disinfocheck est un site web d&apos;EDMO BELUX, un
                        centre de recherche consacré à la surveillance de la
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
                <div className="home-feature-card07">
                  <div className="home-container12">
                    <a
                      href="https://euvsdisinfo.eu/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link11"
                    >
                      <h2 className="home-text057">EU vs disinfo</h2>
                    </a>
                    <span>
                      <span>
                        EUvsDisinfo est un projet de la task force East StratCom
                        du Service européen pour l&apos;action extérieure 
                      </span>
                      <span>
                        créé en 2015 pour mieux prévoir, traiter et répondre aux
                        campagnes de désinformation.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        L&apos;objectif principal est d&apos;accroître la
                        sensibilisation du public et la compréhension des
                        opérations de désinformation du Kremlin, et d&apos;aider
                        les citoyens en Europe et au-delà à développer une
                        résilience numérique et à la manipulation des médias.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-feature-card08">
                  <div className="home-container13">
                    <a
                      href="https://www.liberation.fr/checknews/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link12"
                    >
                      <h2 className="home-text065">Checknews</h2>
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
                <div className="home-feature-card09">
                  <div className="home-container14">
                    <a
                      href="https://firstdraftnews.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link13"
                    >
                      <h2 className="home-text071">First Draft</h2>
                    </a>
                    <span>
                      <span>
                        Au cours de ses années d&apos;activité (2015-2022), le
                        personnel et les collaborateurs de First Draft ont créé
                        un trésor de réflexion, de formation, de recherche,
                        d&apos;outils et plus encore sur la façon de lutter
                        contre la désinformation en ligne. Organisés en six
                        catégories, vous trouverez des travaux sur la
                        compréhension des défis posés par la désinformation au
                        21eme siècle.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-feature-card10">
                  <div className="home-container15">
                    <a
                      href="https://www.lemonde.fr/les-decodeurs/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link14"
                    >
                      <h2 className="home-text075">Les décodeurs</h2>
                    </a>
                    <span>
                      <span>
                        Les Décodeurs est une rubrique du site Web du quotidien
                        français Le Monde créée le 10 mars 2014 et dont
                        l&apos;objectif est de vérifier des informations données
                        sur des thématiques variées. La rubrique fait appel à
                        une équipe dédiée pluridisciplinaire d&apos;une dizaine
                        de personnes.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Attention, les vérifications ont été sujette à divers
                        biais et controverse au cours des années.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://wiki.froth.zone/wiki/Les_D%C3%A9codeurs?lang=fr#Questionnements"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link15"
                      >
                        plus d&apos;informations.
                      </a>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-feature-card11">
                  <div className="home-container16">
                    <a
                      href="https://www.factcheck.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link16"
                    >
                      <h2 className="home-text082">FactCheck</h2>
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
                <div className="home-feature-card12">
                  <div className="home-container17">
                    <a
                      href="https://www.politifact.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link17"
                    >
                      <h2 className="home-text087">Politifact</h2>
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
              </div>
            </div>
            <div className="home-container18">
              <h2 className="home-text093"> Vidéo </h2>
              <div className="home-container19">
                <div className="home-feature-card13">
                  <div className="home-container20">
                    <a
                      href="https://tournesol.app/entities/yt:Z9uDmY-aj64"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link18"
                    >
                      <h2 className="home-text094">
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
                <div className="home-feature-card14">
                  <div className="home-container21">
                    <a
                      href="https://tournesol.app/entities/yt:ZxSTXnmzbvU"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link19"
                    >
                      <h2 className="home-text096">
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
                <div className="home-feature-card15">
                  <div className="home-container22">
                    <a
                      href="https://www.arte.tv/fr/videos/RC-022858/fake-news/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link20"
                    >
                      <h2 className="home-text101">Arte - Fake News</h2>
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
                <div className="home-feature-card16">
                  <div className="home-container23">
                    <a
                      href="https://www.youtube.com/playlist?list=PLCwXWOyIR22srEjn3YI7CqXYiIB_htCjw"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link21"
                    >
                      <h2 className="home-text105">Arte - Citizen Facts</h2>
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
                <div className="home-feature-card17">
                  <div className="home-container24">
                    <a
                      href="https://tournesol.app/entities/yt:Z4SOI2A7WhM"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link22"
                    >
                      <h2 className="home-text111">
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
                <div className="home-feature-card18">
                  <div className="home-container25">
                    <a
                      href="https://tournesol.app/entities/yt:NotAk1zhD9c"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link23"
                    >
                      <h2 className="home-text115">
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
                <div className="home-feature-card19">
                  <div className="home-container26">
                    <a
                      href="https://www.conspiracywatch.info/les-deconspirateurs-lemission"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link24"
                    >
                      <h2 className="home-text119">
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
                <div className="home-feature-card20">
                  <div className="home-container27">
                    <a
                      href="https://www.conspiracywatch.info/category/radio/complorama"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link25"
                    >
                      <h2 className="home-text123">
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
                <div className="home-feature-card21">
                  <div className="home-container28">
                    <a
                      href="https://www.youtube.com/playlist?list=PLCwXWOyIR22s39iU3jz3ik5f_0GtNGnoj"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link26"
                    >
                      <h2 className="home-text127">Arte - Desintox</h2>
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
                <div className="home-feature-card22">
                  <div className="home-container29">
                    <a
                      href="https://www.youtube.com/watch?v=Hug0rfFC_L8"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link27"
                    >
                      <h2 className="home-text131">
                        Kurzgesagt - the ultimate conspiracy debunker
                      </h2>
                    </a>
                    <span>
                      Un rapide guide humoristique pour apprendre à débunker les
                      théories du complot
                    </span>
                  </div>
                </div>
                <div className="home-feature-card23">
                  <div className="home-container30">
                    <a
                      href="https://www.youtube.com/@InfoouMytho/featured"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link28"
                    >
                      <h2 className="home-text133">Info ou mytho ?</h2>
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
            <div className="home-container31">
              <h2 className="home-text135"> Outils pédagogiques </h2>
              <div className="home-container32">
                <div className="home-feature-card24">
                  <div className="home-container33">
                    <a
                      href="https://chromewebstore.google.com/detail/search-by-image/cnojnbdhbhnkbcieeekonklommdnndci"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link29"
                    >
                      <h2 className="home-text136">Search by image</h2>
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
                <div className="home-feature-card25">
                  <div className="home-container34">
                    <a
                      href="https://verificationhandbook.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link30"
                    >
                      <h2 className="home-text141">Verification handbook</h2>
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
                <div className="home-feature-card26">
                  <div className="home-container35">
                    <a
                      href="https://scanner.deepware.ai/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link31"
                    >
                      <h2 className="home-text146">Deepware</h2>
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
                <div className="home-feature-card27">
                  <div className="home-container36">
                    <a
                      href="https://app.illuminarty.ai/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link32"
                    >
                      <h2 className="home-text151">Illuminarty</h2>
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
                <div className="home-feature-card28">
                  <div className="home-container37">
                    <a
                      href="https://29a.ch/photo-forensics/#forensic-magnifier"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link33"
                    >
                      <h2 className="home-text155">Forensically</h2>
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
                <div className="home-feature-card29">
                  <div className="home-container38">
                    <a
                      href="https://lie-detectors.org/fr/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link34"
                    >
                      <h2 className="home-text160">Lie detector</h2>
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
                <div className="home-feature-card30">
                  <div className="home-container39">
                    <a
                      href="https://versustheinternet.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link35"
                    >
                      <h2 className="home-text165">You vs the internet</h2>
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
                <div className="home-feature-card31">
                  <div className="home-container40">
                    <a
                      href="https://www.csem.be/eduquer-aux-medias/productions"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link36"
                    >
                      <h2 className="home-text167">Publications du CSEM</h2>
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
                <div className="home-feature-card32">
                  <div className="home-container41">
                    <a
                      href="https://www.ritimo.org/S-informer-decrypter-participer"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link37"
                    >
                      <h2 className="home-text169">
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
            <div className="home-container42">
              <h2 className="home-text171"> Ouvrages </h2>
              <div className="home-container43">
                <div className="home-feature-card33">
                  <div className="home-container44">
                    <p className="home-text172">
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
                      <br className="home-text183"></br>
                      <br></br>
                      <span>
                        Aurélie Ledoux, Frédérique Leichter-Flack et Philippe
                        Zard (dir.), Complot et terreur imaginaires politiques 
                      </span>
                      <span>
                        de la peur, Rennes, Presses universitaires de Rennes (no
                        16), juin 2012
                      </span>
                      <br className="home-text187"></br>
                      <br></br>
                      <span>
                        Emmanuel Kreis, Les puissances de l’ombre : juifs,
                        jésuites, francs-maçons, réactionnaires, la théorie du
                        complot 
                      </span>
                      <span>dans les textes, Paris, CNRS éd, 2008</span>
                      <br className="home-text191"></br>
                      <br></br>
                      <span>
                        Frédéric Charpier, L’obsession du complot, Paris, Bourin
                        éditeur, 2005
                      </span>
                      <br className="home-text194"></br>
                      <br></br>
                      <span>
                        Frédéric Jameson, La totalité comme complot :
                        conspiration et paranoïa dans l’imaginaire contemporain,
                        Paris, Prairies 
                      </span>
                      <span>ordinaires, 2007</span>
                      <br className="home-text198"></br>
                      <br></br>
                      <span>
                        Jack Z. Bratich, Conspiracy panics: political
                        rationality and popular culture, Albany, N.Y, State
                        University of New York Press, 2008
                      </span>
                      <br className="home-text201"></br>
                      <br></br>
                      <span>
                        Gérald Bronner, La démocratie des crédules, Paris, PUF,
                        2013
                      </span>
                      <br className="home-text204"></br>
                      <br></br>
                      <span>
                        Laurent Bazin et Pierre-Henri Tavoillot, Tous paranos ?
                        Pourquoi nous aimons tant les complots, La
                        Tour-d’Aigues, Éd. de l’Aube, 
                      </span>
                      <span>coll. “Monde en cours”, 2012</span>
                      <br className="home-text208"></br>
                      <br></br>
                      <span>
                        Luc Boltanski, Enigmes et complots : Une enquête à
                        propos d’enquêtes, Paris, Gallimard, 2012
                      </span>
                      <br className="home-text211"></br>
                      <br></br>
                      <span>
                        Marc Jacquemin et Jérôme Jamin L’histoire que nous
                        faisons. Contre les théories de la manipulation,
                      </span>
                      <br className="home-text214"></br>
                      <br></br>
                      <span>
                        Éditions Labor / Éditions Espace de Libertés, 2007
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br className="home-text217"></br>
                      <br></br>
                      <span>
                        Nicolas Chevassus-au-Louis, Théories du complot. On nous
                        cache tout, on nous dit rien, Paris, First Editions,
                        2014
                      </span>
                      <br className="home-text220"></br>
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
                      <br className="home-text224"></br>
                      <br></br>
                      <span>
                        Pierre-André Taguieff, La foire aux illuminés :
                        ésotérisme, théorie du complot, extrémisme, Paris, Mille
                        et une nuits, 2005
                      </span>
                      <br className="home-text227"></br>
                      <br></br>
                      <span>
                        Pierre-André Taguieff, L’imaginaire du complot mondial :
                        aspects d’un mythe moderne, Paris, Éd. Mille et une
                        nuits, 2006 
                      </span>
                      <br className="home-text230"></br>
                      <br></br>
                      <span>
                        Richard Hofstadter, Le style paranoïaque. Théories du
                        complot et droite radicale en Amérique, Paris, F.
                        Bourin, 2012
                      </span>
                      <br className="home-text233"></br>
                      <br></br>
                      <span>
                        Rob Brotherton, Suspicious Minds: Why we believe
                        conspiracies, Bloomsbury, 2015
                      </span>
                      <br className="home-text236"></br>
                      <br></br>
                      <span>
                        Sophie Mazet, Manuel d’autodéfense intellectuelle,
                        Paris, Robert Laffont Éditions, 2015
                      </span>
                      <br className="home-text239"></br>
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
        <div id="about" className="home-about">
          <h1 className="home-text243">Pourquoi ce projet ?</h1>
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
              className="home-link38"
            >
              la branche Bruxelloise de l&apos;ONG Justice &amp; Paix
            </a>
            <span>.</span>
            <br></br>
            <br></br>
            <span>
              Les différentes ressources présentées ci-dessus ne prétendent en
              aucun cas offrir une vision exhaustive et objective de
              l&apos;ensemble des initiatives contre la désinformation à travers
              le monde. 
            </span>
            <br></br>
            <span>
              Cette plateforme est simplement le reflet de la volonté d&apos;un
              citoyen bénévole de proposer différentes ressources pertinentes
              aux intéressés. 
            </span>
            <br></br>
            <span>
              Pour un travail similaire et plus académique, je vous renvoie vers
              l&apos;excellent 
            </span>
            <a href="#update_dem" className="home-link39">
              upgrade democracy
            </a>
            <span className="home-text254">.</span>
            <br></br>
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
              Ce site sera mis à jour au gré de mes trouvailles et recherches.
              Pour toutes corrections, suggestion ou demandes vous pouvez me
              contacter à 
            </span>
            <a
              href="mailto:demystificator@hworld.one?subject=demystificator@hworld.one"
              className="home-link40"
            >
              demystificator@hworld.one
            </a>
            <br></br>
            <br></br>
            <br></br>
            <span>
              En espérant vous avoir offert de quoi affuter votre esprit
              critique en ces temps bien gris,
            </span>
            <span> </span>
            <br></br>
            <span>je vous laisse sur ces </span>
            <a
              href="https://youtu.be/qN1ZaFtIBuI?t=1801"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link41"
            >
              belles paroles de Nassim Haram
            </a>
            <span className="home-text267">ein.</span>
            <br></br>
            <br></br>
            <br></br>
            <span>Thielen Oscar</span>
            <br></br>
          </span>
        </div>
        <footer className="home-footer">
          <div className="home-content">
            <span className="home-text273">Made with 🔥 and coffee </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            border-color: #61616b;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-text {
            color: rgb(39, 39, 45);
            width: auto;
            font-size: 36px;
            font-style: normal;
            font-weight: 400;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-right {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-link {
            display: contents;
          }
          .home-nav-links {
            text-decoration: none;
          }
          .home-button {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-work-with-us {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(229, 254, 88);
          }
          .home-work-with-us:hover {
            opacity: 0.5;
          }
          .home-link01 {
            display: flex;
            font-size: 24px;
            text-decoration: none;
          }
          .home-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-work-with-us1 {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(229, 254, 88);
          }
          .home-work-with-us1:hover {
            opacity: 0.5;
          }
          .home-text001 {
            display: flex;
            font-size: 24px;
          }
          .home-image1 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-mobile-menu {
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
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-branding1 {
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            border-color: #61616b;
            flex-direction: row;
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-text002 {
            color: #27272d;
            font-size: 30px;
            font-family: Inter;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-middle {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-work-with-us2 {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: rgb(229, 254, 88);
          }
          .home-work-with-us2:hover {
            opacity: 0.5;
          }
          .home-text003 {
            display: flex;
            font-size: 24px;
          }
          .home-hero {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 140px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 140px;
          }
          .home-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text004 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25;
          }
          .home-text006 {
            background-color: rgb(229, 254, 88);
          }
          .home-text007 {
            background-color: rgb(229, 254, 88);
          }
          .home-text009 {
            background-color: rgb(229, 254, 88);
          }
          .home-hero-image {
            width: 100%;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 180px;
            padding-right: 180px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #e5fe58;
          }
          .home-image2 {
            width: 640px;
            height: 540px;
            object-fit: cover;
          }
          .home-explore {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            border-color: #61616b;
            border-width: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            border-top-width: 1px;
          }
          .home-container01 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container02 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text011 {
            width: 712px;
            font-size: 54px;
            max-width: 800px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .home-text012 {
            opacity: 0.9;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .home-container03 {
            gap: var(--dl-space-space-threeunits);
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
          .home-text013 {
            width: auto;
            height: var(--dl-size-size-small);
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
          .home-container04 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card:hover {
            border-color: #e5fe58;
          }
          .home-container05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link03 {
            display: contents;
          }
          .home-text014 {
            font-weight: 600;
          }
          .home-feature-card01 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card01:hover {
            border-color: #e5fe58;
          }
          .home-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link04 {
            display: contents;
          }
          .home-text020 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card02 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card02:hover {
            border-color: #e5fe58;
          }
          .home-container07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link05 {
            display: contents;
          }
          .home-text026 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card03 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card03:hover {
            border-color: #e5fe58;
          }
          .home-container08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link06 {
            display: contents;
          }
          .home-text030 {
            font-style: normal;
            font-weight: 600;
          }
          .home-feature-card04 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card04:hover {
            border-color: #e5fe58;
          }
          .home-container09 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link07 {
            display: contents;
          }
          .home-text036 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card05 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card05:hover {
            border-color: #e5fe58;
          }
          .home-container10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link09 {
            display: contents;
          }
          .home-text041 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card06 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card06:hover {
            border-color: #e5fe58;
          }
          .home-container11 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link10 {
            display: contents;
          }
          .home-text047 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card07 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card07:hover {
            border-color: #e5fe58;
          }
          .home-container12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link11 {
            display: contents;
          }
          .home-text057 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card08 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card08:hover {
            border-color: #e5fe58;
          }
          .home-container13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link12 {
            display: contents;
          }
          .home-text065 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card09 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card09:hover {
            border-color: #e5fe58;
          }
          .home-container14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link13 {
            display: contents;
          }
          .home-text071 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card10 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card10:hover {
            border-color: #e5fe58;
          }
          .home-container15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link14 {
            display: contents;
          }
          .home-text075 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-link15 {
            text-decoration: underline;
          }
          .home-feature-card11 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card11:hover {
            border-color: #e5fe58;
          }
          .home-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link16 {
            display: contents;
          }
          .home-text082 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card12 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card12:hover {
            border-color: #e5fe58;
          }
          .home-container17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link17 {
            display: contents;
          }
          .home-text087 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-container18 {
            gap: var(--dl-space-space-threeunits);
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
          .home-text093 {
            width: auto;
            height: var(--dl-size-size-small);
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
          .home-container19 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature-card13 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card13:hover {
            border-color: #e5fe58;
          }
          .home-container20 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link18 {
            display: contents;
          }
          .home-text094 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card14 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card14:hover {
            border-color: #e5fe58;
          }
          .home-container21 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link19 {
            display: contents;
          }
          .home-text096 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card15 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card15:hover {
            border-color: #e5fe58;
          }
          .home-container22 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link20 {
            display: contents;
          }
          .home-text101 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card16 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card16:hover {
            border-color: #e5fe58;
          }
          .home-container23 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link21 {
            display: contents;
          }
          .home-text105 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card17 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card17:hover {
            border-color: #e5fe58;
          }
          .home-container24 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link22 {
            display: contents;
          }
          .home-text111 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card18 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card18:hover {
            border-color: #e5fe58;
          }
          .home-container25 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link23 {
            display: contents;
          }
          .home-text115 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card19 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card19:hover {
            border-color: #e5fe58;
          }
          .home-container26 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link24 {
            display: contents;
          }
          .home-text119 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card20 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card20:hover {
            border-color: #e5fe58;
          }
          .home-container27 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link25 {
            display: contents;
          }
          .home-text123 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card21 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card21:hover {
            border-color: #e5fe58;
          }
          .home-container28 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link26 {
            display: contents;
          }
          .home-text127 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card22 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card22:hover {
            border-color: #e5fe58;
          }
          .home-container29 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link27 {
            display: contents;
          }
          .home-text131 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card23 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card23:hover {
            border-color: #e5fe58;
          }
          .home-container30 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link28 {
            display: contents;
          }
          .home-text133 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-container31 {
            gap: var(--dl-space-space-threeunits);
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
          .home-text135 {
            width: auto;
            height: var(--dl-size-size-small);
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
          .home-container32 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature-card24 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card24:hover {
            border-color: #e5fe58;
          }
          .home-container33 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link29 {
            display: contents;
          }
          .home-text136 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card25 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card25:hover {
            border-color: #e5fe58;
          }
          .home-container34 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link30 {
            display: contents;
          }
          .home-text141 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card26 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card26:hover {
            border-color: #e5fe58;
          }
          .home-container35 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link31 {
            display: contents;
          }
          .home-text146 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card27 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card27:hover {
            border-color: #e5fe58;
          }
          .home-container36 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link32 {
            display: contents;
          }
          .home-text151 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card28 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card28:hover {
            border-color: #e5fe58;
          }
          .home-container37 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link33 {
            display: contents;
          }
          .home-text155 {
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card29 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card29:hover {
            border-color: #e5fe58;
          }
          .home-container38 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link34 {
            display: contents;
          }
          .home-text160 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card30 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card30:hover {
            border-color: #e5fe58;
          }
          .home-container39 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link35 {
            display: contents;
          }
          .home-text165 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card31 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card31:hover {
            border-color: #e5fe58;
          }
          .home-container40 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link36 {
            display: contents;
          }
          .home-text167 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-feature-card32 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-feature-card32:hover {
            border-color: #e5fe58;
          }
          .home-container41 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link37 {
            display: contents;
          }
          .home-text169 {
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-container42 {
            gap: var(--dl-space-space-threeunits);
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
          .home-text171 {
            width: auto;
            height: var(--dl-size-size-small);
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
          .home-container43 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature-card33 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
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
          .home-container44 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text172 {
            font-weight: 400;
          }
          .home-text183 {
            font-weight: 400;
          }
          .home-text187 {
            font-weight: 400;
          }
          .home-text191 {
            font-weight: 400;
          }
          .home-text194 {
            font-weight: 400;
          }
          .home-text198 {
            font-weight: 400;
          }
          .home-text201 {
            font-weight: 400;
          }
          .home-text204 {
            font-weight: 400;
          }
          .home-text208 {
            font-weight: 400;
          }
          .home-text211 {
            font-weight: 400;
          }
          .home-text214 {
            font-weight: 400;
          }
          .home-text217 {
            font-weight: 400;
          }
          .home-text220 {
            font-weight: 400;
          }
          .home-text224 {
            font-weight: 400;
          }
          .home-text227 {
            font-weight: 400;
          }
          .home-text230 {
            font-weight: 400;
          }
          .home-text233 {
            font-weight: 400;
          }
          .home-text236 {
            font-weight: 400;
          }
          .home-text239 {
            font-weight: 400;
          }
          .home-about {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            border-color: #61616b;
            border-style: solid;
            border-width: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text243 {
            width: 712px;
            font-size: 54px;
            max-width: 800px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
          }
          .home-link38 {
            text-decoration: underline;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #61616b;
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-top-width: 1px;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #61616b;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            border-top-width: 0px;
            border-bottom-width: 0px;
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              gap: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-link01 {
              line-height: 30px;
            }
            .home-text001 {
              line-height: 30px;
            }
            .home-text003 {
              line-height: 30px;
            }
            .home-hero {
              gap: var(--dl-space-space-fourunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text004 {
              color: rgb(39, 39, 45);
              font-size: 32px;
              font-style: normal;
              font-weight: 400;
              line-height: 1.25;
            }
            .home-text006 {
              background-color: rgb(229, 254, 88);
            }
            .home-text007 {
              background-color: rgb(229, 254, 88);
            }
            .home-text009 {
              background-color: rgb(229, 254, 88);
            }
            .home-hero-image {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-explore {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
              border-top-width: 0px;
            }
            .home-text011 {
              font-size: 32px;
            }
            .home-text012 {
              font-style: normal;
              font-weight: 400;
            }
            .home-text013 {
              font-size: 32px;
            }
            .home-link08 {
              text-decoration: underline;
            }
            .home-text071 {
              font-style: normal;
              font-weight: 600;
              text-decoration: none;
            }
            .home-text093 {
              font-size: 32px;
            }
            .home-text119 {
              text-decoration: none;
            }
            .home-text135 {
              font-size: 32px;
            }
            .home-text151 {
              text-decoration: none;
            }
            .home-text171 {
              font-size: 32px;
            }
            .home-about {
              gap: var(--dl-space-space-fourunits);
              height: auto;
              margin-bottom: 0px;
              padding-bottom: 120px;
            }
            .home-text243 {
              font-size: 32px;
            }
            .home-link38 {
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-link39 {
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-text254 {
              background-color: rgb(229, 254, 88);
            }
            .home-link40 {
              color: var(--dl-color-gray-black);
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-link41 {
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-text267 {
              text-decoration: underline;
              background-color: rgb(229, 254, 88);
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content {
              gap: var(--dl-space-space-threeunits);
              align-self: center;
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text273 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-work-with-us {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-link01 {
              display: none;
            }
            .home-image {
              width: 16px;
              height: 14px;
              display: flex;
            }
            .home-burger-menu {
              display: flex;
              align-self: flex-start;
            }
            .home-work-with-us1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text001 {
              display: none;
            }
            .home-image1 {
              width: 16px;
              height: 14px;
              display: flex;
            }
            .home-branding1 {
              max-width: 80%;
            }
            .home-text002 {
              color: rgb(39, 39, 45);
              font-size: 30px;
              font-family: Inter;
            }
            .home-work-with-us2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text003 {
              font-size: 24px;
              line-height: 30px;
            }
            .home-image2 {
              width: auto;
              height: 220px;
            }
            .home-feature-card {
              flex-direction: row;
            }
            .home-container05 {
              flex-direction: column;
            }
            .home-feature-card01 {
              flex-direction: row;
            }
            .home-container06 {
              flex-direction: column;
            }
            .home-feature-card02 {
              flex-direction: row;
            }
            .home-container07 {
              flex-direction: column;
            }
            .home-feature-card03 {
              flex-direction: row;
            }
            .home-container08 {
              flex-direction: column;
            }
            .home-feature-card04 {
              flex-direction: row;
            }
            .home-container09 {
              flex-direction: column;
            }
            .home-feature-card05 {
              flex-direction: row;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-feature-card06 {
              flex-direction: row;
            }
            .home-container11 {
              flex-direction: column;
            }
            .home-feature-card07 {
              flex-direction: row;
            }
            .home-container12 {
              flex-direction: column;
            }
            .home-feature-card08 {
              flex-direction: row;
            }
            .home-container13 {
              flex-direction: column;
            }
            .home-feature-card09 {
              flex-direction: row;
            }
            .home-container14 {
              flex-direction: column;
            }
            .home-feature-card10 {
              flex-direction: row;
            }
            .home-container15 {
              flex-direction: column;
            }
            .home-feature-card11 {
              flex-direction: row;
            }
            .home-container16 {
              flex-direction: column;
            }
            .home-feature-card12 {
              flex-direction: row;
            }
            .home-container17 {
              flex-direction: column;
            }
            .home-feature-card13 {
              flex-direction: row;
            }
            .home-container20 {
              flex-direction: column;
            }
            .home-feature-card14 {
              flex-direction: row;
            }
            .home-container21 {
              flex-direction: column;
            }
            .home-feature-card15 {
              flex-direction: row;
            }
            .home-container22 {
              flex-direction: column;
            }
            .home-feature-card16 {
              flex-direction: row;
            }
            .home-container23 {
              flex-direction: column;
            }
            .home-feature-card17 {
              flex-direction: row;
            }
            .home-container24 {
              flex-direction: column;
            }
            .home-feature-card18 {
              flex-direction: row;
            }
            .home-container25 {
              flex-direction: column;
            }
            .home-feature-card19 {
              flex-direction: row;
            }
            .home-container26 {
              flex-direction: column;
            }
            .home-feature-card20 {
              flex-direction: row;
            }
            .home-container27 {
              flex-direction: column;
            }
            .home-feature-card21 {
              flex-direction: row;
            }
            .home-container28 {
              flex-direction: column;
            }
            .home-feature-card22 {
              flex-direction: row;
            }
            .home-container29 {
              flex-direction: column;
            }
            .home-feature-card23 {
              flex-direction: row;
            }
            .home-container30 {
              flex-direction: column;
            }
            .home-feature-card24 {
              flex-direction: row;
            }
            .home-container33 {
              flex-direction: column;
            }
            .home-feature-card25 {
              flex-direction: row;
            }
            .home-container34 {
              flex-direction: column;
            }
            .home-feature-card26 {
              flex-direction: row;
            }
            .home-container35 {
              flex-direction: column;
            }
            .home-feature-card27 {
              flex-direction: row;
            }
            .home-container36 {
              flex-direction: column;
            }
            .home-feature-card28 {
              flex-direction: row;
            }
            .home-container37 {
              flex-direction: column;
            }
            .home-feature-card29 {
              flex-direction: row;
            }
            .home-container38 {
              flex-direction: column;
            }
            .home-feature-card30 {
              flex-direction: row;
            }
            .home-container39 {
              flex-direction: column;
            }
            .home-feature-card31 {
              flex-direction: row;
            }
            .home-container40 {
              flex-direction: column;
            }
            .home-feature-card32 {
              flex-direction: row;
            }
            .home-container41 {
              flex-direction: column;
            }
            .home-feature-card33 {
              flex-direction: row;
            }
            .home-container44 {
              flex-direction: column;
            }
            .home-about {
              height: auto;
              margin-bottom: 0px;
              padding-bottom: 120px;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              flex-wrap: wrap;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-explore {
              border-top-width: 1px;
            }
            .home-container05 {
              flex-direction: column;
            }
            .home-container06 {
              flex-direction: column;
            }
            .home-container07 {
              flex-direction: column;
            }
            .home-container08 {
              flex-direction: column;
            }
            .home-container09 {
              flex-direction: column;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-container11 {
              flex-direction: column;
            }
            .home-container12 {
              flex-direction: column;
            }
            .home-container13 {
              flex-direction: column;
            }
            .home-container14 {
              flex-direction: column;
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
            .home-container24 {
              flex-direction: column;
            }
            .home-container25 {
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
            .home-container39 {
              flex-direction: column;
            }
            .home-container40 {
              flex-direction: column;
            }
            .home-container41 {
              flex-direction: column;
            }
            .home-container44 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
