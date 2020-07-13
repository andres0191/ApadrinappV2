<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/andres0191/ApadrinappV2/master/assets/icono-apadrinapp.png">
</p>

What is **Apadrinapp**?

Due to the large number of people who want to belong to the wonderful family of Rappi as **Rappitenderos**, but for various reasons they lack economic resources for the acquisition of a vehicle or its documents, a cell phone, or even a data plan that allow them to connect with users, we have thought of Apadrinapp.
An application that, through **Crowdlending**, allows the collection to finance the dream of future **Rappitenderos**. Being a high risk **investment**, the interest generated for the investor will be **8%**, while the Rappitendero will have an interest charge of **10%**.

The application consists of two different profiles:
Rappitendero's Profile:
The first screen that is found is the login screen, where you can create an account by filling in the **Name**, **e-mail** and **password**, or log in by entering the **e-mail** and **password**:
<p align="center">
  <img width="800" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/perfilRappitendero/login-singup-rappitendero.png">
</p>

When the session is already started, the **menu** appears, where there are two options:

<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/perfilRappitendero/menu-rappitendero.jpeg">
</p>

1- [In Login Rappitendero](https://github.com/andres0191/ApadrinappV2/blob/master/screens/Rappitendero/loginRappitendero/loginRappi.js) you can see the **publication** that has been made, and how much has been collected so far
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/perfilRappitendero/singlepostRappi.jpeg">
</p>

2- [In Post Rappitendero](https://github.com/andres0191/ApadrinappV2/blob/master/screens/Rappitendero/PostRappitendero/SingleRappiPost.js) you can **post** how much money you need and what you want to do with that money, what do you plan to invest in to be a Rappitendero
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/perfilRappitendero/postRappi.jpeg">
</p>


Investor Profile:

The first screen that is found is the [login](https://github.com/andres0191/ApadrinappV2/blob/master/screens/login/login.js) screen, where you can **create an account** by filling in the Name, e-mail and password, or **login** by entering the e-mail and password:
<p align="center">
  <img width="800" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/perfilInversor/loginSingupInversor.jpeg">
</p>
When the session is already started, the **menu** appears, where there are four options:
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/perfilInversor/MenuInversor.jpeg">
</p>

1- [In the Account Status](https://github.com/andres0191/ApadrinappV2/blob/master/screens/estadocuenta/Estadocuenta.js) you can see the **investment you currently** have, you will have the possibility to transfer money to Rappipay and return to the Menu
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/perfilInversor/EstadocuentaInversor.jpeg">
</p>

2- [in the Apadrinar ](https://github.com/andres0191/ApadrinappV2/blob/master/screens/publicacionesrappi/PublicacionesRappi.js) are all the **publications** made by people who want to be Rappitenderos, where you can see for what purpose they want the money and how much they are requesting
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/perfilInversor/listaPublicaciones.jpeg">
</p>

3- [In Microprestamos](https://github.com/andres0191/ApadrinappV2/blob/master/screens/UserTransacciones/userTransacciones.js) shows the history of the **transactions** made, whom you have invested in and in what time

For the development of this application we use the technologies of:
<p align="center">
  <img width="300" src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/tecnologias.jpg">
</p>
<p align="center">
  (image with firebase, react native, node js, redux technologies)
</p>

and we think the architecture in the following way:
<p align="center">
  <img src="https://github.com/andres0191/ApadrinappV2/blob/andres/assets/readmeImages/Crowdlending-Rappi.png">
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
