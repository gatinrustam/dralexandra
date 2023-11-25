import { Intro } from "../Intro/Intro";
import { Promotion } from "../Promotion/Promotion";

export function BunnerSection() {
  return (
  <section className="bunner">
    <div className="bunner__container bunner__container--wide">
      <Intro />
    </div>

    <div className="bunner__container bunner__container--short">
      <Promotion />
    </div>
  </section>
  )
}