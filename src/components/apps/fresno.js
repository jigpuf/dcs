import React from "react";

const FresnoTime = () => {
  const beetlesStats = [
    {
      member: "John Lennon",
      class: "Bard",
      strength: 12,
      dexterity: 14,
      constitution: 10,
      intelligence: 15,
      wisdom: 13,
      charisma: 16,
    },
    {
      member: "Paul McCartney",
      class: "Cleric",
      strength: 11,
      dexterity: 13,
      constitution: 14,
      intelligence: 12,
      wisdom: 16,
      charisma: 15,
    },
    {
      member: "George Harrison",
      class: "Ranger",
      strength: 13,
      dexterity: 15,
      constitution: 12,
      intelligence: 14,
      wisdom: 11,
      charisma: 10,
    },
    {
      member: "Ringo Starr",
      class: "Fighter",
      strength: 15,
      dexterity: 12,
      constitution: 16,
      intelligence: 10,
      wisdom: 14,
      charisma: 13,
    },
  ];

  return (
    <div>
      <h2>Dungeons & Dragons Stats of the Beatles</h2>
      <table>
        <thead>
          <tr>
            <th>Member</th>
            <th>Class</th>
            <th>Strength</th>
            <th>Dexterity</th>
            <th>Constitution</th>
            <th>Intelligence</th>
            <th>Wisdom</th>
            <th>Charisma</th>
          </tr>
        </thead>
        <tbody>
          {beetlesStats.map((member, index) => (
            <tr key={index}>
              <td>{member.member}</td>
              <td>{member.class}</td>
              <td>{member.strength}</td>
              <td>{member.dexterity}</td>
              <td>{member.constitution}</td>
              <td>{member.intelligence}</td>
              <td>{member.wisdom}</td>
              <td>{member.charisma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FresnoTime;
