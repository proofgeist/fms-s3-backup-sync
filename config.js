module.exports = {

  //setup for server
  serverName: "uUniqueName",  // this will get prepended to the path
  backupDirectory: "<your directory>",  // the directory where the backups are
  
  //Setup Amazon
  bucket: "aws-bucket-name",   //Amazon Bucket
  region: "us-west-1",   // Region that has the bucket

  accessKeyId: process.env.ACCESS_KEY_ID,   // store these in ENV Vars
  secretAccessKey: process.env.SECRET_ACCESS_KEY,

};
