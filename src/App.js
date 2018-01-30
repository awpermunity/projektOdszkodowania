import React, { Component } from 'react';
// import Form from './components/Form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './img/logoMedcur.png';
import email_icon from './icons/email_icon.png';
import phone_icon from './icons/phone_icon.png';
import plane from './img/plane.png';
import white_arrow from './icons/white_arrow.png';
import yellow_arrow from './icons/yellow_arrow.png';
import arrow from './icons/arrow_with_txt.png';
import yellow_circle from './icons/yellow_circle.png';
import coins from './icons/coins.png';
import building from './icons/building.png';
import pen from './icons/pen.png';
import user from './icons/user.png';
import mouse_click from './icons/mouse-click.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Form from "./components/Form";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      form: 0
    }
    this.showForm = this.showForm.bind(this)
  }
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  showForm() {
    this.setState({
      form: !this.state.form
    });
  }

  render() {
    const x = console.log('ssad');
    return (
      <div>
        <div id="slider">
          <div id="slider-nav" class="container relative">
            <div class="row">
              <div id="header">
                <div class="leftSide">
                  <div id="logo">
                    <a>
                      <img src={logo} alt="" />
                    </a>
                  </div>
                </div>
                <div class="rightSide">
                  <div class="info">
                    <div class="email">
                      <img src={email_icon} alt />
                      <div class="email_text">
                        <span> info@medcur.pl </span>
                      </div>
                    </div>
                    <div class="vertical_line">
                    </div>
                    <div class="phone">
                      <img src={phone_icon} alt />
                      <div class="phone_text">
                        <span> 71 726 15 66 </span>
                      </div>
                    </div>
                  </div>
                  <nav class="menu_nav">
                    <a> Strona główna </a>
                    <a> Korzyści </a>
                    <a> Warunki </a>
                    <a> Oferta </a>
                    <a onClick={this.showForm}> Zgłoś </a>
                  </nav>
                </div>
              </div>
              <div class="row_down">
                <div class="main_slogan">
                  <h2> Dowiedz się jak uzyskać odszkodowanie za opóźniony, odwołany lub przepełniony lot </h2>
                  <h3>Komplikacje w przypadku lotów zdarzają się często, nie zawsze z powodu wystąpienia „nieoczekiwanych okoliczności” - nie musisz się na to godzić! Należy Ci się odszkodowanie za opóźniony, odwołany lub przepełniony lot nawet do 600 Euro!</h3>
                  <button class="btn-more_info">
                    <p> Dowiedz się więcej </p>
                  </button>
                </div>
                <div class="planeImg">
                  <img src={plane} />
                </div>
              </div>
              <div class="slide-slogan">
                <div class="tittle-tattle">
                  <p> Tylko w ciągu poprzednich wakacji aż <b> 41,4 tys.
                     poszkodowanych pasażerów.</b> Szacowana łączna wartość
                     ich odszkodowań to <b> 12,7 mln eur </b> </p>
                </div>
                <div class="arrow">
                  <img src={arrow} />
                </div>
              </div>
              <div class="daniel_kubach">
                <h2>DANIEL KUBACH</h2>
                <h3>Polski biznesmen, miloner, inwestror</h3>
                <p>Od 2004 do 2014 roku w branży odszkodowań (EuCO S.A.)  był jednym z głównych udziałowców zajmującej się odszkodowania komunikacyjnymi firmy EUCO. Za jej pośrednictwem pieniądze otrzymało ponad 200 tys. osób, uzyskując łączną sumę odszkodowań w wysokości 1.500.000.000zł.</p>
                <div class="items">
                  <div class="item_txt">
                    <div class="item">
                      <img src={coins} />
                    </div>
                    <p>
                      ANIOŁ BIZNESU
                  </p>
                  </div>
                  <div class="item_txt">
                    <div class="item">
                      <img src={building} />
                    </div>
                    <p>
                      KILKANAŚCIE FIRM
                    </p>
                  </div>
                  <div class="item_txt">
                    <div class="item">
                      <img src={pen} />
                    </div>
                    <p>
                      AUTOR 4 KSIĄŻEK
                    </p>
                  </div>
                  <div class="item_txt">
                    <div class="item">
                      <img src={user} />
                    </div>
                    <p>
                      CZŁONEK BCC
                  </p>
                  </div>
                </div>
                <section id="report-a-flight">
                  <h2>CO TERAZ?</h2>
                  <h4>Możesz zacząć od zaraz – poprowadzimy Cię krok po kroku.</h4>
                  <h3>Wybierz formę współpracy:</h3>
                  <div>
                    <button class="btn_report" onClick={() => this.showForm()}>
                      <p>Chcę zgłosić LOT</p>
                    </button>
                  </div>
                  <div>
                    <img src={mouse_click} />
                  </div>
                </section>
              </div>
            </div>
          </div>
          {this.state.form && <MuiThemeProvider >
            <div className="App">
              <Form showForm={this.showForm} onChange={fields => this.onChange(fields)} />
              <p>
                {JSON.stringify(this.state.fields, null, 2)}
              </p>
            </div>
          </MuiThemeProvider>}
        </div>
      </div>
    );
  }
}

export default App;
