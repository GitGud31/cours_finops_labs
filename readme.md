# TPs
<details>
<summary>
<b>TP1: Deploy a Simple HTTP-triggered Cloud Function</b>
</summary>
- [<b>All Screenshots tp1, sub folder</b>](/tp1/)

</details>

- Create Function [mhamedHttpFunc](/tp1/screenshots/create_func.png)
- Deploy Function [successfull](/tp1/screenshots/dploy.png)
- Result on Azure Portal [Dashboard](/tp1/screenshots/result.png)

---
---

# LABs

<details >
<summary>
<b>Lab 1: Creating and Managing Azure Virtual Machines</b>
</summary>

- [<b>All Screenshots lab1, sub folder</b>](/lab1/)
- [VM Created **successully**](/lab1/vm_running.png)
- [Connect to VM via SSH **successully**](/lab1/success_ssh_connection.png)
- [Install software on the VM **successully**](/lab1/success_install_software.png)

- [x] Deploy a Windows and a Linux virtual machine (VM) in Azure.
- [x] Configure VM sizes, storage options, and networking settings.
- [x] Connect to the VMs using Remote Desktop Protocol (RDP) and Secure Shell (SSH).
- [x] Install software on the VMs and take snapshots.
</details>

---

<details >
<summary>
<b>Lab 2: Implementing Azure Virtual Networks</b>
</summary>

- [<b>All Screenshots lab2, sub folder</b>](/lab2/)
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
  - Created new Vnet `ml-vnet`.
  - From VNet `mhamed-lehbab-vm-vnet`, I peered the `ml-vnet`.
  </details>

---

<details >
<summary>
<b>Lab 3: Deploying Azure App Service Web Apps
</b>
</summary>

- [<b>All Screenshots lab3, sub folder</b>](/lab3/)
- [Config App Service Plan](/lab3/config_app_service.png)
- [Web App Dashboard](/lab3/web_app_dashboard.png)

- [x] Create an Azure App Service plan.
  - [The Web app template](https://icy-sand-07d5e9b03.5.azurestaticapps.net/).
- [x] Deploy a web application using Azure App Service.
- [x] Configure custom domains and SSL certificates.
- [x] Implement deployment slots for staging and production.
  - Azure doesn't support Deployment Slots for Static Web Apps.
  </details>

---

<details >
<summary>
<b>Lab 4: Managing Azure Storage Accounts and Blobs</b>
</summary>

- [<b>All Screenshots lab 4, sub folder</b>](/lab4/)
- [Storage Account Dashboard](/lab4/storage_account_dashboard.png)
- [Uploaded a blob](/lab4/uploaded_blob.png)
- [Uploaded a blob 2](/lab4/uploaded_blob2.png)
- [SAS config](/lab4/sas_config.png).
- [Implemented lifecycle managemenet](/lab4/life_cycle_management.png)

- [x] Create a Storage Account with different replication options.
- [x] Upload and manage blobs using Azure Portal and Azure CLI.
  - From Portal.
    - Created a container `mycontainer`.
    - Uploaded a Blob. (See screenshot above Uploaded a blob).
  - From CLI.
    - Created a container `mycontainer2`.
    - Uploaded a Blob (see screenshot above Uploaded a blob 2).
- [x] Set up Shared Access Signatures (SAS) for secure access.
  - Generated keys for container etc.
- [x] Implement lifecycle management policies.
  - Created a rule (TransitionToCool) to delete blobs after 60 days.
  </details>

---

<details>
<summary>
<b>Lab 5: Implementing Azure SQL Databases</b>
</summary>

- [<b>All Screenshots lab 5, sub folder</b>](/lab5/)
- [Azure SQL Database intance](/lab5/db_config.png)
- [Connected to Database](/lab5/connect_to_td.png)
- [Configure firewall](/lab5/config_firewall.png)
- [Import Data to database](/lab5/import_data_to_db.png)
- [Database Geo Replica](/lab5/replica.png)

- [x] Deploy an Azure SQL Database instance.
- [x] Configure firewall settings to allow client access.
- [x] Import data into the database.
  - Imported `sample.sql` to Account Storage Bloc.
  - [Check the data that's inside database](/lab5/data_in_db.png).
- [x] Implement Geo-replication for high availability.
</details>

---

<details>
<summary>
<b>Lab 6: Configuring Azure Active Directory (Azure AD)</b>

</summary>
*** NOTICE ***

<b>Lab 6: School account is restricted.</b>

- [<b>All Screenshots lab 6, sub folder</b>](/lab6/)

- [x] Create and manage users and groups in Azure AD.
- [x] Configure Multi-Factor Authentication (MFA) for users.
- [] Set up Application Registrations and Service Principals.
- [x ] Implement Conditional Access policies.

</details>

---

<details>
<summary>
<b>Lab 7: Implementing Azure Functions</b>
</summary>

- [<b>All Screenshots lab 7, sub folder</b>](/lab7/)
- [Function App Created](/lab7/fn_app_created.png)
- [Trigger Function Running](/lab7/fn_app_post.png)
- [Monitoring Function performance](/lab7/fn_app_monitoring.png)

- [x] Create an Azure Function App.
- [x] Develop a serverless function triggered by an HTTP request.
  - From available Templates.
  - Create HTTP trigger function `HttpTrigger1`.
- [x] Integrate the function with Azure Storage or Azure Queue.
  - install storage-blob `npm install @azure/storage-blob`.
  - Modify the function code to [this](/lab7/index.js).
- [x] Monitor function performance and logs.

</details>

---

<details>
<summary>
<b>Lab 8: Using Azure Cognitive Services</b>
</summary>

- [<b>All Screenshots lab 8, sub folder</b>](/lab8/)
- [Azure Cognitive Services resource](/lab8/azure_ai_service.png)

- [x] Create a Cognitive Services resource.
- [x] Develop an application that uses the Text Analytics API.
  - Use `Language` model.
  - Create a [nodejs app](/lab8/text-analitycs-app/)
  - Use your `keys` and `endpoints`.
- [x] Analyze sentiment and key phrases from sample text.
  - Run the `node index.js` command.
  - See [Result](/lab8/result.png)
- [x] Monitor API usage and manage keys.
</details>

---

<details>
<summary>
<b>Lab 9: Implementing Azure Load Balancer and Traffic Manager
</b>
</summary>

- [<b>All Screenshots lab 9, sub folder</b>](/lab9/)
- [Second vm](/lab9/create_vm2.png)
- [Loadbalancer dashboard](/lab9/lb_dashboard.png)
- [Loadbalancing rules](/lab9/lb_rules.png)
- [Traffic manager](/lab9/trafic_manager.png)
- [Traffic endpoint monitoring](/lab9/traffic_endpoint.png)

- [x] Deploy Azure Load Balancer to distribute traffic across VMs.
  - Created a second VM `mhamed-vm2`.
  - Config Load Balancer, frontend ip configuration. [HERE](/lab9/frontend_config.png)
  - Config Load Balancer, backend pool. [HERE](/lab9/backend_config.png)
- [x] Configure health probes and load balancing rules.
  - Created Load balancing rules. `http-lb-rule`
- [x] Set up Azure Traffic Manager for DNS-based traffic routing.
  - Created a traffic manager. `mhamed-traffic-maanger`.
  - Added entpoint to monitor traffic.
- [x] Test failover scenarios.
</details>

---

<details>
<summary>
<b>Lab 10: Configuring Azure Backup and Recovery Services</b>
</summary>

- [<b>All Screenshots lab 10, sub folder</b>](/lab10/)
- [Vault dashboard](/lab10/vault_dashboard.png)
- [Backup](/lab10/backup_vm.png)
- [VM policy](/lab10/vm_policy.png)

- [x] Create a Recovery Services Vault.
- [x] Configure backup for VMs and Azure Files.
- [x] Perform a backup and restore operation.
  - Backed up my VM Linux machine.
- [x] Implement backup policies and retention.
  - Select policy type. In my case `vm policy`.
  - Config VM Policy `mhamed-vm-policy`.
  </details>

---

<details>
<summary>
<b>Lab 11: Implementing Azure Monitor and Alerts</b>
</summary>

- [<b>All Screenshots lab 11, sub folder</b>](/lab11/)
- [VM Monitoring](/lab11/vm_monitoring.png)
- [All Group Monitoring](/lab11/group_monitoring.png)
- [Alerts Monitoring](/lab11/alerts_monitoring.png)

- [x] Set up Azure Monitor to collect metrics and logs.
- [x] Create alerts based on resource metrics.
- [x] Visualize data using Azure dashboards.
- [x] Implement Action Groups for alert notifications.

</details>

---

<details>
<summary>
<b>Lab 12: Using Azure Resource Manager (ARM) Templates</b>
</summary>

- [<b>All Screenshots lab 12, sub folder</b>](/lab12/)

- [x] Write an ARM template to deploy a multi-tier application.
  - Template Multi-tier Application. [HERE](/lab12/template.json)
- [x] Parameterize the template for reusability.

  ```
  az deployment group create --resource-group <your-resource-group> --template-file template.json --parameters sqlServerName=mhamed-lehbab-sql-server databaseName=mhamed-lehbab-db webAppName=mhamed-lehbab-fn-app appServicePlanName=SERVICE_APP_NAME adminUsername=USERNAME_HERE adminPassword=PASSWORD_HERE location=central-fr

  ```

- [x] Deploy resources using the template via Azure CLI.

  ```
  az deployment group validate --resource-group <your-resource-group> --template-file template.json --parameters sqlServerName=mhamed-lehbab-sql-server databaseName=mhamed-lehbab-db webAppName=mhamed-lehbab-fn-app appServicePlanName=SERVICE_APP_NAME adminUsername=USERNAME_HERE adminPassword=PASSWORD_HERE location=central-fr

  ```

- [x] Validate and troubleshoot deployment issues.

  ```
  az deployment group validate --resource-group <your-resource-group> --template-file template.json --parameters sqlServerName=mhamed-lehbab-sql-server databaseName=mhamed-lehbab-db webAppName=mhamed-lehbab-fn-app appServicePlanName=SERVICE_APP_NAME adminUsername=USERNAME_HERE adminPassword=PASSWORD_HERE location=central-fr

  ```

  </details>

---

<details>
<summary>
<b>Lab 13: Implementing Azure Key Vault</b>
</summary>

- [<b>All Screenshots lab 13, sub folder</b>](/lab13/)
- [Key vault dashboard](/lab13/key_vault_dashboard.png)

- [x] Create an Azure Key Vault.
- [x] Store and retrieve secrets, keys, and certificates.
- [x] Integrate Key Vault with an application for secret management.
- [x] Set up access policies and monitoring.
- [x] Try to use one of your key inside an application.

</details>

---

<details>
<summary>
<b>Lab 14: Configuring Azure DNS and Custom Domains</b>
</summary>

- [<b>All Screenshots lab 14, sub folder</b>](/lab14/)
- [Dns dashboard](/lab14/dns_dashboard.png)
- [Dns Record](/lab14/dns_records.png)

- [x] Create an Azure DNS Zone.
- [x] Manage DNS records for a custom domain.
- [x] Configure domain verification and mapping for Azure services.
- [x] Implement DNS aliases (CNAME) and record sets.
</details>

---

<details>
<summary>
<b>Lab 15: Implementing Azure DevOps for CI/CD Pipelines</b>
</summary>

**_ NOTICE _**

<b>Lab 6: School account is restricted.</b>

- [<b>All Screenshots lab 15, sub folder</b>](/lab15/)

- [x] Set up an Azure DevOps organization and project.
- [x] Create a Git repository and commit code.
- [x] Configure a CI pipeline to build the application.
- [x] Set up a CD pipeline to deploy an app template to Azure App Service.
</details>

---

<details>
<summary>
<b>Lab 16: Managing Role-Based Access Control (RBAC)</b>
</summary>

- [<b>All Screenshots lab 16, sub folder</b>](/lab16/)
- [Role assignment From Azure Portal](/lab16/role_assignment.png)
  or `using CLI`

  ```
  az login

  az role assignment create --assignee USER_EMAIL --role Reader --scope RESOURCE_GROUP_NAME
  ```

- [Custom Role with specific persmissions](/lab16/custom_role.png)
- [Audit activity logs](/lab16/activity_log.png)

- [x] Assign built-in roles to users and groups.
- [x] Create custom roles with specific permissions.
- [x] Test access levels for different roles.
- [x] Audit access using activity logs.

</details>

---

<details>
<summary>
<b>Lab 17: Implementing Azure Policy and Governance</b>
</summary>

- [<b>All Screenshots lab 17, sub folder</b>](/lab17/)
- [Create and assign Azure Policies](/lab17/policy.png)
- [Used initiative defitions to group multiple policies](/lab17/init_definitions.png)

- [x] Create and assign Azure Policies to enforce compliance.

  - Create a custom Policy `m-lehbab-policy`.

  ```
  az login

  az policy assignment create \
  --name "AllowedLocations" \
  --policy "/providers/Microsoft.Authorization/policyDefinitions/<policy_id>" \
  --params '{"allowedLocations": {"value": ["Central France", "FR"]}}' \
  --scope "/subscriptions/SUBSCRIPTION_ID_HERE"
  ```

- [x] Use initiatives to group multiple policies.

  - Create initiative definitions `mhamed-init-definitions`.

  ```
  az login

  az policy set-definition create \
  --name "SecureInitiative" \
  --definitions '[{"policyDefinitionId": "/providers MicrosoftAuthorization/policyDefinitions/POLICY_ID_1_HERE"},{"policyDefinitionId": "/providers/Microsoft.Authorization/policyDefinitions/POLICY_ID_2_HERE"}]' \
  --params '{"allowedLocations": {"value": ["Central France", "FR"]}}'

  ```

- [x] Remediate non-compliant resources.

  ```
  az login

  az policy state list --query "[?isCompliant==`false`].{resource:resourceId}" --policy-assignment "POLICY_ASSIGNMENT_ID_HERE"

  ```

- [x] Analyze compliance reports.

</details>

---

<details>
<summary>
<b>Lab 18: Configuring Azure Virtual Desktop</b>
</summary>

- [<b>All Screenshots lab 18, sub folder</b>](/lab18/)
- [Host pool](/lab18/host_pool.png)
- [Config VM pools](/lab18/config_vm_pools.png)

- [x] Set up Azure Virtual Desktop environment.
  ```
  az desktopvirtualization hostpool create     --resource-group mhamed-lehbab-labs     --name mhamed-host-pool     --location "West Europe"     --friendly-name "M'hamed Host Pool Lab18"     --description "Host Pool for Azure Virtual Desktop Lab"
  ```
- [x] Configure host pools, session hosts, and workspaces.
- [x] Publish remote desktop applications.
- [x] Connect to the virtual desktops as a user.

</details>

---

<details>
<summary>
<b>Lab 19: Implementing Azure Cosmos DB</b>
</summary>

- [<b>All Screenshots lab 19, sub folder</b>](/lab19/)
- [Create cosmos DB](/lab19/cosmos_db.png)
- [Data Explorer](/lab19/data-explorer.png)

- [x] Create a Cosmos DB account with a chosen API (SQL, MongoDB, etc.).
- [x] Insert and query data using the Data Explorer.
- [x] Configure throughput and partitioning.
- [ ] Implement Global Distribution.
  - I'm on [serverless](/lab19/serverless.png) mode. I cannot do this part.

</details>

---

<details>
<summary>
<b>Lab 20: Deploying Azure Kubernetes Service (AKS)</b>
</summary>

- [<b>All Screenshots lab 20, sub folder</b>](/lab20/)
- [ASK Cluster](/lab20/aks-cluster.png)
- [Deployed containerized app](/lab20/deployed-ask.png)
- [Check running services](/lab20/check.png)

- [x] Set up an AKS cluster.

  ```
  az upgrade

  az group create --name mhamed-lehbab-labs --location europe

  az aks create \
  --resource-group mhamed-lehbab-labs \
  --name mhamed-ask-cluster \
  --node-count 1 \
  --enable-addons monitoring \
  --kubernetes-version 1.24.9 \
  --generate-ssh-keys

  az aks get-credentials --resource-group mhamed-lehbab-labs --name mhamed-ask-cluster

  kubectl get nodes
  ```

- [x] Deploy a containerized application using Kubernetes manifests.
  - [Deployement](/lab20/deply.yaml) ```script```
  - [Services](/lab20/service.yaml) ```script```
- [x] Scale applications and manage pods.
  - [Auto scaling](/lab20/scalin.yaml) ```script```
- [x] Implement network policies for pod communication.

</details>
