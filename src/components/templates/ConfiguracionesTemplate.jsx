import styled from "styled-components";
import fondocuadros from "../../assets/fondocuadros.svg";
import { Link } from "react-router-dom";
import { DataModulosConfiguracion } from "../../utils/dataEstatica";
import { useEffect } from "react";
export function ConfiguracionesTemplate() {
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     document.querySelectorAll(".card").forEach((card) => {
  //       const rect = card.getBoundingClientRect();
  //       const x = e.clientX - rect.left;
  //       const y = e.clientY - rect.top;

  //       card.style.setProperty("--mouse-x", `${x}px`);
  //       card.style.setProperty("--mouse-y", `${y}px`);
  //     });
  //   };

  //   const cardsContainer = document.getElementById("cards");
  //   if (cardsContainer) {
  //     cardsContainer.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       cardsContainer.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }
  // }, []);
  return (
    <Container>
      <div id="cards">
        {DataModulosConfiguracion.map((item, index) => {
          
          return (
            <Link
              to=""
              className={item.state ? "card" : "card"}
              key={index}
            >
              <div className="card-content">
                <div className="card-image">
                  <img src={item.icono} />
                </div>

                <div className="card-info-wrapper">
                  <div className="card-info">
                    <i className="fa-duotone fa-unicorn"></i>
                    <div className="card-info-title">
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
      #cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto; /* centra horizontalmente */
  }

  .card {
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      background-color: #f0f0f0;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 100%;
  }

  .card-image img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 0.8rem;
  }

  .card-info-wrapper {
    text-align: center;
  }

  .card-info-title h3 {
    margin: 0;
    font-size: 1rem;
  }

  .card-info-title h4 {
    margin: 0.25rem 0 0;
    font-size: 0.85rem;
    color: #666;
  }

  @media (max-width: 900px) {
    #cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    #cards {
      grid-template-columns: 1fr;
    }
  }
`;

// const Container = styled.div`
//    --bg-color: rgb(20, 20, 20);
//    --card-color: rgb(23, 23, 23);
//    background-image: url(${fondocuadros});
//    background-size: contain;
//    background-position: center;
//    background-repeat: no-repeat, repeat;
//    align-items: center;
//    background-color: ${({ theme }) => theme.bgtotal};
//    display: flex;
//    height: 100vh;
//    justify-content: center;
//    width:100%;
//    align-items: flex-start;
//    #cards {
//      display: flex;
//      flex-wrap: wrap;
//      gap: 8px;
//      max-width: 916px;
//      width: calc(100% - 20px);
//      padding: 10px;
//      border-color: red;
//    }
//    #cards:hover > .card::after {
//      opacity: 1;
//    }

//   .card {
//      background-color: rgba(255, 255, 255, 0.3);
//      border-radius: 10px;
//      cursor: pointer;
//      display: flex;
//      height: 260px;
//      flex-direction: column;
//      position: relative;
//      width: 300px;
//      &:hover {
//        .card-image {
//          img {
//            filter: grayscale(0);
//          }
//        }
//      }
//    }

//    .card > .card-content {
//     background-color: ${({ theme }) => theme.bgcards};
//      border-radius: inherit;
//      display: flex;
//      flex-direction: column;
//      flex-grow: 1;
//      inset: 1px;
//      padding: 10px;
//      position: absolute;
//      z-index: 2;
//    }
    
// `;