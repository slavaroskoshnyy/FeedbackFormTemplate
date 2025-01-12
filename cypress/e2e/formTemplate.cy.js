/// <reference types="cypress" />

describe("feedback form submission", () => {
  const name = "Vyacheslav";
  const email = "test@test.ru";
  const tel = 89999999999;
  const message = "Для первого раза пойдет?";

  it("feedback form submission", () => {
    cy.visit("/");

    cy.get(
      ".question_107 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55"
    )
      .type(name)
      .should("have.value", name);

    cy.get(
      ".question_108 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55"
    )
      .type(email)
      .should("have.value", email);

    cy.get(
      ".question_109 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55"
    )
      .type(tel)
      .should("have.value", tel);

    cy.get("#downshift-0-toggle-button").click();
    cy.get(".scroll > .content > :nth-child(3)").click();
    cy.get("#downshift-0-input").should("have.value", "Вопрос в тех.поддержку");

    cy.get(".multiline___cc6bb61529c652f37050")
      .type(message)
      .should("have.value", message);

    cy.contains("Отправить").click();

    cy.contains("Благодарим за обращение!");
  });
});
