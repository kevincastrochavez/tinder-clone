import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "../firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection("people").onSnapshot((snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="tinderCards">
      <p>Tinder Cards</p>

      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="tinderCards__container-swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
