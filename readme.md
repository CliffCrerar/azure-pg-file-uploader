# Azure Cloud PG Uploader 

<small>This project is a work in progress</small>

The purpose of the uploader is to receive a path where a group of CSV uploads are ready to be uploaded.

Then using `pg-node` execute the simulated copy script what is appropriatly variabled to execute the upload to the correct entity. 

The program shall do so recursively until all files in the input directory has been consumed.
