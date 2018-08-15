# secuwear-client-ubertooth
This repository contains code related to the ubertooth integration with the client in secuwear. The Script requires the location of the folder containing the captures as an argument. Once it finds the capture files it starts parsing through important information and sends a request to the secuwear server to store the information to the database for analysis.

# How to use the script
1) Install wireshark
In wireshark goto >Preferences->Protocols->DLT_USER and edit Encapsulations Table to add user and in payload keep 'btle'
2) Run the setup.py file in the cloned respository with ```python setup.py develop``` and after that you should have the plugin installed.

Then, run the following command:
```python
Usage: pcaps <experiment_id> <handle_type> <handle_path>

Example: pcaps 1 file /home/nadusumilli/Desktop/file
         pcaps 1 directory /home/nadusumilli/Desktop/directory

```
