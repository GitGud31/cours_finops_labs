

# Todos

<details open>
<summary>
<b>Lab 1: Creating and Managing Azure Virtual Machines</b>
</summary>


- [All Screenshots lab1, sub folder](/lab1/)
- [VM Created **successully**](/lab1/vm_running.png)
- [Connect to VM via SSH **successully**](/lab1/success_ssh_connection.png)
- [Install software on the VM **successully**](/lab1/success_install_software.png)

- [x] Deploy a Windows and a Linux virtual machine (VM) in Azure.
- [x] Configure VM sizes, storage options, and networking settings.
- [x] Connect to the VMs using Remote Desktop Protocol (RDP) and Secure Shell (SSH).
- [x] Install software on the VMs and take snapshots.
</details>

----

<details open>
<summary>
<b>Lab 2: Implementing Azure Virtual Networks</b>
</summary>

- [All Screenshots lab2, sub folder](/lab2/)
- [VNet created with multiple subnets](/lab2/vnet_dashboard.png)
- [NGS created](/lab2/ngs_dashboard.png)
- [Connect the VM to a newly created subnet](/lab2/connect_vm_to_new_subnet.png)
- [New VM's subnet](/lab2/new_vm_subnet.png)
- [New VNet](/lab2/new_vnet.png)
- [VNets peering **successful**](/lab2/vnets_peering.png)

- [x] Create a Virtual Network (VNet) with multiple subnets.
- [x] Set up Network Security Groups (NSGs) to control inbound and outbound traffic.
- [x] Deploy VMs into specific subnets.
  - Had to create a new subnet
  - Change the Subnet via the NIC Settings.
  - Edit the IP Configuration.
  - Save the new settings.
  - Restart the VM.
- [x] Configure VNet peering between two VNets.
  - Created new Vnet (ml-vnet).
  - From VNet (mhamed-lehbab-vm-vnet), I peered the (ml-vnet).
</details>

----

<details open>
<summary>
<b>Lab 3: Deploying Azure App Service Web Apps
</b>
</summary>

- [All Screenshots lab3, sub folder](/lab3/)
- [Config App Service Plan](/lab3/config_app_service.png)
- [Web App Dashboard](/lab3/web_app_dashboard.png)

- [x] Create an Azure App Service plan.
  - [The Web app template](https://icy-sand-07d5e9b03.5.azurestaticapps.net/).
- [x] Deploy a web application using Azure App Service.
- [x] Configure custom domains and SSL certificates.
- [x] Implement deployment slots for staging and production.
  - Azure doesn't support Deployment Slots for Static Web Apps. 
</details>

----
