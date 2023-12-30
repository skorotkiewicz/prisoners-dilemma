const About = () => {
  return (
    <div className="about">
      <h1>About the Game - &quot;Prisoner&apos;s Dilemma&quot;</h1>

      <p>
        Welcome to the intriguing world of the &quot;Prisoner&apos;s
        Dilemma&quot; – a thought-provoking game that delves into the
        complexities of human decision-making and cooperation. This fascinating
        concept has inspired many, including the renowned YouTube channel
        Veritasium, as showcased in their insightful video:{" "}
        <a href="https://www.youtube.com/watch?v=mScpHTIi-kM">
          The Prisoner&apos;s Dilemma
        </a>
        .
      </p>

      <h2>The Basics:</h2>
      <p>
        The &quot;Prisoner&apos;s Dilemma&quot; presents a scenario where two
        players, A and B, must independently choose between cooperation and
        defection. The game unfolds with the following point system, shaping the
        outcomes based on the decisions made:
      </p>

      <ul>
        <li>
          <strong>
            Mutual Cooperation (Both players choose to cooperate):
          </strong>{" "}
          Both players earn 3 points, fostering mutual benefit and
          collaboration.
        </li>
        <li>
          <strong>
            Defection by A, Cooperation by B (A defects, B cooperates):
          </strong>{" "}
          The defecting player (A) gains 5 points, while the cooperating player
          (B) receives 0 points. The scenario is mirrored if A cooperates and B
          defects.
        </li>
        <li>
          <strong>Mutual Defection (Both players choose to defect):</strong>{" "}
          Both players earn 1 point each, emphasizing the consequences of a lack
          of trust and collaboration.
        </li>
      </ul>

      <h2>Understanding the &quot;Prisoner&apos;s Dilemma&quot;:</h2>
      <p>
        Originating from game theory, the &quot;Prisoner&apos;s Dilemma&quot;
        serves as a captivating metaphor for various real-world situations. In
        the classic scenario, two suspects are arrested, and prosecutors lack
        substantial evidence. If both remain silent (cooperate), they face a
        shorter sentence. However, if one defects while the other remains
        silent, the defector goes free, and the one who stayed silent receives a
        harsh sentence. If both defect, they each receive a moderate sentence.
        The dilemma lies in balancing personal gain against mutual benefit.
      </p>

      <h2>Join the Game:</h2>
      <p>
        Embark on this strategic journey, where every decision shapes the course
        of the game. Will you choose cooperation, seeking mutual success, or
        will the allure of individual gain lead you down the path of defection?
        Explore the intricacies of human behavior and strategic thinking in the
        &quot;Prisoner&apos;s Dilemma&quot; – a game that challenges not only
        your decisions but also your understanding of cooperation and
        competition.
      </p>

      <p>
        Enjoy the game and may your choices unfold new dimensions of strategy
        and collaboration!
      </p>
    </div>
  );
};

export default About;
