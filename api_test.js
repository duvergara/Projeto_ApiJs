const axios = require('axios');
const chai = require("chai");
const expect = chai.expect;
const gerenciador = require('axios')
const express = require("express");
const WebDriver = require("webdriver");
///////////////////////////////////////
/////////////  npx selenium-standalone start Inicir servidor  webdrives 
///////////////Em uma nova janela da linha de comando, execute npx codeceptjs run --steps
///////////////////
 async function getTestApi() {
  return await axios.get(`https://swapi.co/api/people/1/`, {
    'Content-Type': 'application/json'

  }
  )
  
}
async function getTestApiPlaneta() {
  return await axios.get(`https://swapi.co/api/planets/1/`, {
    'Content-Type': 'application/json'
  })}




Feature("Validar a API do Stars Wars");

Scenario('API  Stars Wars utilizando os endpoints planeta :', async () => {
 
  planeta = await getTestApiPlaneta()
  expect(planeta.status).to.equal(200)
  expect(planeta.data.name).to.equal('Tatooine')
  expect(planeta.data.rotation_period).to.equal('23')
  expect(planeta.data.orbital_period).to.equals('304')
  expect(planeta.data.diameter).to.equals('10465')
  expect(planeta.data.climate).to.equals('arid')
  expect(planeta.data.gravity).to.equal('1 standard')
  expect(planeta.data.terrain).to.equal('desert')
  expect(planeta.data.surface_water).to.equal('1')
  expect(planeta.data.population).to.equal('200000')
  console.log("Status",planeta.status)
})

Scenario('Validar API  Stars Wars utilizando os endpoints People:', async () => {
  pessoa = await getTestApi()
  expect(pessoa.status).to.equal(200)
  expect(pessoa.data.name).to.equal('Luke Skywalker')
  expect(pessoa.data.height).to.equal('172')
  expect(pessoa.data.mass).to.equals('77')
  expect(pessoa.data.hair_color).to.equals('blond')
  expect(pessoa.data.skin_color).to.equals('fair')
  expect(pessoa.data.eye_color).to.equal('blue')
  expect(pessoa.data.birth_year).to.equal('19BBY')
  expect(pessoa.data.gender).to.equal('male')
  console.log("Status",pessoa.status)



})