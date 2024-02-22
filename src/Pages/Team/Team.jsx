import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./team.module.scss";
import HeyIcon from "../../Components/Team/Circle1";

const teamMembers = [
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member 1",
    designation: "Design ",
    githubLink: "https://github.com/member1",
    linkedinLink: "https://www.linkedin.com/in/member1/",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member 2",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member 3",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member 3",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member 3",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",

    name: "Member 3",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member 3",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member 3",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member 3",
    designation: "Designation ",
  },
  {
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=180",
    name: "Member ",
    designation: "Designation ",
  },
];
const TeamMember = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.teamMember}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.memberImage1}>
        <div className={styles.memberImage2}>
          <img className={styles.memberImage} src={member.imageUrl} alt="Team Member" />
        </div>
        <div
          className={
            isHovered
              ? `${styles.memberDesignation} ${styles.red}`
              : styles.memberDesignation
          }
        >
          {member.designation}
        </div>
      </div>
      <div className={styles.memberName}>
        {member.name}
        <div className={isHovered ? `${styles.icons} ${styles.showIcons}` : styles.icons}>
          <HeyIcon className={styles.heyIcon} />
          <a
            href={member.githubLink}
            target="_blank"
            aria-label={`GitHub link for ${member.name}`}
          >
            <FaGithub className={styles.githubIcon} />
          </a>
          <HeyIcon className={styles.heyIcon} />

          <FaLinkedin className={styles.linkedinIcon} />
        </div>
      </div>
    </div>
  );
};

const Team = () => (
  <div className={styles.teamContainer1}>
    <div className={styles.teamContainer}>
      <h2 className={styles.teamTitle}>TEAM</h2>

      <div className={styles.firstMemberContainer}>
        <TeamMember member={teamMembers[0]} />
      </div>
      <div className={styles.teamGrid}>
        {teamMembers.slice(1).map((member, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TeamMember
            member={member}
            key={`${member.name}-${member.designation}-${index}`}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Team;
