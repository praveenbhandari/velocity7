# MediBlock-frontend 
MediBlock is an online portal that maintains a digital copy of a patient’s medical history, along with all of their diagnosis and prescriptions.



#### You can view the demo of the app using the following links

  1. https://velocityseven.co/

  2. Spheron - https://urhackathonmediblock-02f646.spheron.app/
  
  3. Replit - https://urhackthon-polygon-1.praveenbhandar1.repl.co
              https://replit.com/@PraveenBhandar1/urhackthon-polygon-1     
  
  4. Block Explorer - https://explorer-liberty20.shardeum.org/account/0x1c92da319f424657115d4462e21b67f0ac1335e3
 
  5.  Link to youtube video - https://www.youtube.com/watch?v=6cCxWX1Dalw 

## Installation
The projects requires NodeJS and npm to work. Instructions to install all other dependencies are given below.

## Node modules
1. Move to the project directory and open it in your terminal.
2. Run `npm install` to install project dependencies.

## IPFS
1. Go to the github page of IPFS and install IPFS Desktop

## Local server
1. Install Node lite-server by running the following command on your terminal npm install -g lite-server

## Metamask
1. Metamask is a browser extension available for Google Chrome, Mozilla Firefox and Brave Browser.
2. Go to the this link and add Metamask to your browser.

## Getting the dApp running

#### Configuration

#### 1. IPFS
Fire up your terminal and run ipfs init

Then run

`
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "['*']"
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "['true']"
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods "['PUT', 'POST', 'GET']"
`

Note: If you face any issues with the above command on windows, try using command prompt and escape sequences or git bash.


#### 2. Metamask
After installing Metamask, click on the metamask icon on your browser.
Click on TRY IT NOW, if there is an announcement saying a new version of Metamask is available.
Click on continue and accept all the terms and conditions after reading them.
Stop when Metamask asks you to create a new password. We will come back to this after deploying the contract in the next section.

#### 3. Smart Contract

Install Truffle using 
`
npm install truffle -g
`
Compile Contracts using truffle compile

#### Running the dApp

#### 1. Connecting Metamask to our local blockchain
    1. Connect metamask to localhost:8485
    2. Click on import account
    3. Select any account from ganache and copy the private key to import account into metaMask

#### 2. Starting IPFS
    1. Start the IPFS Desktop Application

#### 3. Start a local server
    1. Open a new terminal window and navigate to /YOUR_PROJECT_DIRECTORY/app/.
    2. Run npm start.
    3. Open localhost:3000 on your browser.

That's it! The dApp is up and running locally.




