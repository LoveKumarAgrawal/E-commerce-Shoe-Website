import {Client, Account, Databases} from 'appwrite'
import conf from '../conf/conf.js';

const client = new Client();

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

export const account = new Account(client)

// Database

export const databases = new Databases(client,conf.appwriteDatabaseId)