<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/andres0191/ApadrinappV2/master/assets/icono-apadrinapp.png">
</p>

What is **Apadrinapp**?

Due to the large number of people who want to belong to the wonderful family of Rappi as **Rappitenderos**, but for various reasons they lack economic resources for the acquisition of a vehicle or its documents, a cell phone, or even a data plan that allow them to connect with users, we have thought of Apadrinapp.
An application that, through **Crowdlending**, allows the collection to finance the dream of future **Rappitenderos**. Being a high risk **investment**, the interest generated for the investor will be **8%**, while the Rappitendero will have an interest charge of **10%**.

The application consists of two different profiles:
Rappitendero's Profile:
The first screen that is found is the [login](https://github.com/andres0191/ApadrinappV2/blob/master/screens/Rappitendero/loginRappitendero/loginRappi.js) screen, where you can create an account by filling in the **Name**, **e-mail** and **password**, or log in by entering the **e-mail** and **password**:
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilRappitendero/login.jpg">
</p>
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/singup.jpg">
 </p>

When the session is already started, the **menu** appears, where there are two options:

<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilRappitendero/menuRappitendero.jpg">
</p>

1- [In Post Rappitendero](https://github.com/andres0191/ApadrinappV2/blob/master/screens/Rappitendero/PostRappitendero/SingleRappiPost.js) you can **post** how much money you need and what you want to do with that money, what do you plan to invest in to be a Rappitendero.
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilRappitendero/postRappitendero.jpg">
</p>

2- [In Single Post Rappitendero](https://github.com/andres0191/ApadrinappV2/blob/master/screens/Rappitendero/PostRappitendero/SingleRappiPost.js) you can post, how long it has been published and when it will expire.
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilRappitendero/SinglePost.jpg>
</p>


Investor Profile:

The first screen that is found is the [login](https://github.com/andres0191/ApadrinappV2/blob/master/screens/login/login.js) screen, where you can **create an account** by filling in the Name, e-mail and password, or **login** by entering the e-mail and password:
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilRappitendero/login.jpg">
</p>
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/singup.jpg">
 </p>
 
When the session is already started, the **menu** appears, where there are four options:
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/menuInversor.jpg">
</p>

1- [in the Apadrinar ](https://github.com/andres0191/ApadrinappV2/blob/master/screens/publicacionesrappi/PublicacionesRappi.js) are all the **publications** made by people who want to be Rappitenderos, where you can see for what purpose they want the money and how much they are requesting.
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/listaPublicaciones.jpg">
</p>

1.1- When you have selected a dream that you want to sponsor, the following will happen:

<p align='center'>
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/Apadrinar.jpg">
 </p>
  <p align="center">
   <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/mensajeexito.jpg">
 </p>


2- [In Microprestamos](https://github.com/andres0191/ApadrinappV2/blob/master/screens/UserTransacciones/userTransacciones.js) shows the history of the **transactions** made, whom you have invested in and in what time.
<p align='center'>
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/historialInversion.jpg">
</p>

3- [In the Account Status](https://github.com/andres0191/ApadrinappV2/blob/master/screens/estadocuenta/Estadocuenta.js) you can see the **investment you currently** have, you will have the possibility to transfer money to Rappipay and return to the Menu
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/saldo.jpg">
</p>
 <p align="center">
   <img widht="300" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/perfilInversor/alertTransferencia.jpg">
 </p>


For the development of this application we use the technologies of:
<p align="center">
  <img width="600" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/Tecnologias.png">
</p>
<p align="center">
</p>

and we think the architecture in the following way:
<p align="center">
  <img width="900" src="https://github.com/andres0191/ApadrinappV2/blob/master/assets/readmeImages/arquitectura.png">
</p>

Once the architecture and priorities were defined on the screens that we had to develop, we proceeded to design and connect the database:


We use firebase due to:
- Easy to use and well documented.
- High integration capabilities.
- High performance.
- Suitable for real time applications.
- Extensive functionalities.
- Support for web, Android and iOS.
- Simple control board.


Authors:
* [Tomas Mejia](https://github.com/towasme) [Twitter: towasme](https://twitter.com/towasme) [Linkedin: ](https://www.linkedin.com/in/tom%C3%A1s-mej%C3%ADa-estrada-541596159/)
* [Andres Garcia](https://github.com/andres0191) [Twitter: andres0191](https://twitter.com/andres0191) [Linkedin: ](https://www.linkedin.com/in/anfegar/)
* [Pablo Sanchez](https://github.com/jackeado) [Twitter: jackeado](https://twitter.com/jackeado) [Linkedin: ](https://www.linkedin.com/in/pablo-a-s%C3%A1nchez-2bbb9940/)
