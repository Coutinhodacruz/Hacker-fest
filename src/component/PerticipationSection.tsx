import styles from "../styles/Perticerpant.module.css";

const ParticipationSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.imageContainer}>
          <img
            alt="Workspace with laptop"
            src="/Apply.png"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.heading}>Participation Requirements</h3>
          <div className={styles.requirement}>
            <div className={styles.checkmark}>✓</div>
            <p>Teams must be physically present at the venue in Lagos throughout the duration of the hacker house (March 24-29).</p>
          </div>
          <div className={styles.requirement}>
            <div className={styles.checkmark}>✓</div>
            <p>Teams should ensure they can be fully engaged and attentive to their projects throughout the period.</p>
          </div>
          <div className={styles.requirement}>
            <div className={styles.checkmark}>✓</div>
            <p>All participants will be required to adhere to the event guidelines and code of conduct.</p>
          </div>
          <div className={styles.requirement}>
            <div className={styles.checkmark}>✓</div>
            <p>Intellectual property created by teams during the hacker house will be retained by those teams.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;