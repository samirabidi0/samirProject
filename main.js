function each(array, func) { 
  for (var i = 0; i < array.length; i++) { 
        func(array[i], i); 
  } 
}

function map(array, f) { 
  var acc = []; 
  each(array, function(element, i) { 
        acc.push(f(element, i)); 
  }); 
  return acc; 
}

function filter(array, predicate) {
var acc = [];
each(array, function (element, index) {
 if (predicate(element, index)) {
   acc.push(element);
 }
});
return acc;
}

function reduce(array, f, acc) {
if (acc === undefined) {
 acc = array[0];
 array = array.slice(1);
}
each(array, function (element, i) {
 acc = f(acc, element, i);
});
return acc;
}
function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();
function job(name,description,skill,salary,img,detail){
return{
  
    name:name,
    description:description,
    skill:skill,
    salary:salary,
    img:img,
    detail:detail
}
}
var data =[job1,job2,job3]
var job1=job("Développeur ","Looking for développeur full stack","Java,Développement logiciel,Angular","2500$",'download.png')
var job2=job("Doctor","looking for qualified Family Physicians","Turn-Key medical space professional","3000$",'dc.jpg')
var job3=job("Mecanician","Assurer des entretiens préventifs","Bac + 3  en maintenance industrielle","450$",'mec.png')


$("#container").append(` <div class='job1'> <button class='remove'>remove job</button> <h2 class='tt1'>${job1.name}</h2><h4 class='desk1'>${job1.description}</h4> <h4 class='skill1'>${job1.skill}</h4><h4 class='skill4'>${job1.salary}</h4> <img class='img1'src=${job1.img} /> <a  class = 'skill7'href="http://fr.indeed.com/viewjob?jk=261208666ce94a03&from=serp&vjs=3">${job1.detail}"More Detail"</a></div>`)
$("#container").append(`<h2 class='tt2'>${job2.name}</h2><h4 class ='desk2'>${job2.description}</h4> <h4 class='skill2'>${job2.skill}</h4><h4 class='skill5'>${job2.salary}</h4> <img class='img2'src=${job2.img} /> <a  class = 'skill8'href="https://careers.calian.com/careers/pmi-medical-clinic-space-23/">${job2.detail}"More Detail"</a>`)
$("#container").append(`<h2 class='tt3'>${job3.name}</h2><h4 class ='desk3'>${job3.description}</h4> <h4 class='skill3'>${job3.skill}</h4><h4 class='skill6'>${job3.salary}</h4> <img  class='img3'src =${job3.img} /> <a  class = 'skill9'href="https://www.tanitjobs.com/job/1435080/technicien-en-g%C3%A9nie-m%C3%A9caniques/?backPage=1&searchID=1713442015.9863">${job3.detail}"More Detail"</a>`)


$('.skill1').hide()
$('.desk1').hide()
$('.skill4').hide()
$('.skill7').hide()

$('.skill2').hide()
$('.desk2').hide()
$('.skill5').hide()
$('.skill8').hide()

$('.skill3').hide()
$('.desk3').hide()
$('.skill6').hide()
$('.skill9').hide()

$('.img1').on({
  'click': function () {
    $('.desk1').toggle()
$('.skill1').toggle() 

$('.skill4').toggle()
$('.skill7').toggle() 
}

})
$('.img2').on({
    'click': function () {
      $('.desk2').toggle()
  $('.skill2').toggle() 
  
  $('.skill5').toggle()
  $('.skill8').toggle() 
  }
  })
  $('.img3').on({
    'click': function () {
      $('.desk3').toggle()
  $('.skill3').toggle() 
  
  $('.skill6').toggle()
  $('.skill9').toggle()  
  }
  })
  
$('.remove').on('click',function(){
$('.job1').remove()
})

