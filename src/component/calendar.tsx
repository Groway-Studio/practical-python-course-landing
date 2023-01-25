import "./../sass/component/_calendar.scss";

export default function Calendar() {
  return (
    <section className="calendarComponent-container">
      <h3>Programa</h3>
      <div className="calendarComponent">
        <aside className="weekDays">
          <article>
            <div className="weeks">
              <div className="week">Semana 1</div>
              <div className="days">
                <span>Sábado</span>
                <span>Domingo</span>
              </div>
            </div>
            <div className="weeks">
              <div className="week">Semana 2</div>
              <div className="days">
                <span>Sábado</span>
                <span>Domingo</span>
              </div>
            </div>
            <div className="weeks">
              <div className="week">Semana 3</div>
              <div className="days">
                <span>Sábado</span>
                <span>Domingo</span>
              </div>
            </div>
            <div className="weeks">
              <div className="week">Semana 4</div>
              <div className="days">
                <span>Sábado</span>
                <span>Domingo</span>
              </div>
            </div>
          </article>
        </aside>
        <aside className="classHours">
          {/* <article className="hours">
          <div className="item">10:00 - 10:30</div>
          <div className="item">10:30 - 11:00</div>
          <div className="item">11:00 - 11:30</div>
          <div className="item">11:30 - 12:00</div>
          <div className="item">12:00 - 12:30</div>
          <div className="item">12:30 - 13:00</div>
        </article> */}
          <article className="courses">
            <div className="week-days">
              <div className="dayOne">
                <div className="item-1">Introducción a Python</div>
                <div className="item-1">Sintaxis de Python</div>
                <div className="item-1">Bucles y Condicionales</div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto: 
                  </span>
                  <p>Automatizando tareas con Python</p>
                </div>
              </div>
              <div className="dayOne">
                <div className="item-2">Estructura de datos (Tuplas, Listas, Diccionarios)</div>
                <div className="item-1">Bibliotecas y Paquetes</div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>Tratamiento de imágenes con Python</p>
                </div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-2">Programación orientada a objetos</div>
                <div className="item-1">Patrones de diseño</div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>Creando un SDK</p>
                </div>
              </div>
              <div className="dayOne">
                <div className="item-1">
                  Python para internet
                </div>
                <div className="item-1">
                  Protocolo HTTP
                </div>
                <div className="item-1">
                  Introducción a Flask
                </div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>Creando una Landing Page</p>
                </div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-1">
                  Introducción a Django
                </div>
                <div className="item-2">
                  Django Server Rendering
                </div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>Mi blog personal autoadministrable</p>
                </div>
              </div>
              <div className="dayOne">
                <div className="item-2">
                  Introducción a Django RestFramework
                </div>
                <div className="item-1">
                  Protegiendo APIs
                </div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto: 
                  </span>
                  <p>
                    Construyendo un API Restful
                  </p>
                </div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-3">
                Introducción a los pagos en línea
                </div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>Creando links de pago para redes sociales</p>
                </div>
              </div>
              <div className="dayOne">
                <div className="item-2">
                  Introducción a los bots conversacionales
                </div>
                <div className="item-1">
                  Webhooks
                </div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>Construyendo un chabot de Whatsapp</p>
                </div>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
