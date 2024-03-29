const output = document.querySelector(".output");

const membri = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    pic: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    pic: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    pic: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    pic: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    pic: "barbara-ramos-graphic-designer.jpg"
  },
]

for (let membro of membri) {
  console.log(membro);
  output.innerHTML +=
  `
  <div class="col">
        <div class="card my-4 rounded-0 border-0 ">
          <img src="/assets/img/${membro.pic}" class="card-img-top rounded-0 " alt="${membro.nome}">
          <div class="card-body text-center ">
            <h5 class="card-name">Wayne Barnett</h5>
            <p class="card-role">Founder & CEO</p>
          </div>
        </div>
      </div>
  `
}