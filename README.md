<p align="center">
<a href="https://github.com/khurana3773/Starbucks-Frontend/LICENSE.md" rel="Licence"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" /></a>
</p>

![Welcome](/screenshots/starbucks_stores.png?raw=true "Welcome Screen")

<table>
<tr>
<td>
<p align="justify"> Starbucks is a famous American Coffee company with online ordering system. Our project is based on the Offical Starbucks website. It has 3 components <br>
 
<ul>
 <li><a href = "https://github.com/khurana3773/Starbucks-Frontend">Frontend</a></li>
 <li><a href= "https://github.com/shiva322/KongAPIGateway-Starbucks">Kong API</a></li>
<li>Backend
 <ul><li><a href="https://github.com/rsk5492/Starbucks-Portal">Backend-1</a></li>
  <li><a href = "https://github.com/khurana3773/Starbucks-Backend">Backend-2</a></li>
  <li><a href = "https://github.com/akanshamehta17/CMPE281-Hackathon">Backend-3</a></li>
 </ul>
</li>
 </ul>


<p>Frontend is developed using AngularJS and bootstrap. The Frontend of Starbucks sends REST calls to middleware KONG Gateway which is backed by 3-Node Cassandra cluster. The KONG routes the REST calls to respective tenant backends which are independent Starbucks store.
 
The online ordering has a 3-step process <br><ol>
 <li>Choose a store</li>
 <li>Select and add items to the cart</li> 
 <li>Add/remove item in cart, update size/quantity. Once products are confirmed, you can checkout the products.</li>
 </ol>
</p>
</td>
</tr>
</table>


## Table of content

- [Architecture](#architecture)
- [Project Demo](#project-demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Future Enhancement](#future-enhancement)
- [License](#license)
- [Team Members](#team-members)

## Architecture

![Architecture](/screenshots/Architecture.png?raw=true "Architecture")



## Project Demo

<p>You can view the demo of our application <a href="https://www.youtube.com/watch?v=1DqcBS7eUiI" >Here</a> </p>

## Build and Run

* Install Node and NPM.
* Clone the repository
* Open terminal/command prompt , and navigate to the local repository.
* run the following 
```
npm install
```

```
npm start
```

<p>Now open the application using the URL [localhost:8000/index.html][local-app-url]</p>

<p><i>Note: These steps are only for Front-end. For Back-end, see the <a href="https://github.com/rsk5492/Starbucks-Portal">backend repository</a>. To configure the gateway, check this <a href= "https://github.com/shiva322/KongAPIGateway-Starbucks">respository</a></i>.</p>

## Screenshots 

![Screen1](/screenshots/Screen1.PNG?raw=true "Welcome Screen")

<p align="center">The Welcome Screen</p>

![Screen2](/screenshots/screen2.PNG?raw=true "Screen2")

<p align="center">Placing Order</p>

![Screen3](/screenshots/screen3.PNG?raw=true "Screen3")

<p align="center">List of all Orders</p>

![Screen4](/screenshots/Screen4.PNG?raw=true "Detailed View of an Order")

<p align="center">A detailed view of all orders</p>

## Features

- Simple and user friendly
- Scalable
- Fault tolerant with 3 node database cluster.

## Future Enhancement

Dynamic Lists and Login per user/session management are a few future enhancements.


## License

Starbucks(Frontend) is released under the [MIT License](https://github.com/SJSU272Lab/Fall16-Team11/blob/master/LICENSE.md).

## Team Members

| [![Srinivas Annapantula](https://avatars.githubusercontent.com/rsk5492?s=100)<br /><sub>Srinivas Annapantula</sub>](https://github.com/rsk5492)<br /> | [![Akansha Mehta](https://avatars.githubusercontent.com/akanshamehta17?s=100)<br /><sub>Akansha Mehta</sub>](https://github.com/akanshamehta17)<br /> | [![Shiva Padma](https://avatars.githubusercontent.com/shiva322?s=100)<br /><sub>Shiva Padma</sub>](https://github.com/shiva322)<br />| [![Suraj Khurana](https://avatars.githubusercontent.com/khurana3773?s=100)<br /><sub>Suraj Khurana</sub>](https://github.com/khurana3773)<br />|
| :---: | :---: | :---: | :---: |
