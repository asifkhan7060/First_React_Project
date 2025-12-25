import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();  //This object is defined outside the constuctor becuz there may be various user for using authentication
    account; //For various user we have one account for them so here we only declare it 

    constructor() { //For rach object creation of main class the constuctor is called automatically 
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client); // For each user they may have many accounts hence we create object here in constructor
            
    }

    async createAccount({email, password, name}) { //we call this functions to send new user name,email & password 
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name); //User id is created by appwrite 
            if (userAccount) {
                // call another method if user account is already exist
                return this.login({email, password});
            } else {
               return  userAccount;
            } 
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();  //A Object for a main class 

export default authService