export const useRotate = (dispatch, planets, rotateRef) => {
    const handleRotate = (planet, index) => {
      const anglePerPlanet = 360 / planets.length;
  
      // ver barcracnelu hamar sharjum enq : -90 gradus
      const newRotation = -index * anglePerPlanet - 90;
  
      rotateRef.current.style.transition = "transform 2s ease-in-out";
      rotateRef.current.style.transform = `rotate(${newRotation}deg)`;
  
      dispatch({ type: "GET_CENTRAL_PLANET", payload: planet });
    };
  
    return { handleRotate };
  };