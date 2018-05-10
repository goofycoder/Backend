# Azure Web App / Azure Function Slot Deployment with Preview
# Two-Phase Slot Swapping

$azureResourceGroupName = "rgName"
$azureWebAppName = "webAppName"
$sourceSlotName = "staging"
$targetSlotName = "prod"

# Phase 1: Swap with Preview (Warm up the staging slot for deployment)
az webapp deployment slot swap --resource-group $azureResourceGroupName --name $webAppName --slot $sourceSlotName --target-slot $targetSlotName --action preview

# Phase 2: Complete the swap (So the prod won't experience downtime or performance hit caused by slot swapping)
az webapp deployment slot swap --resource-group $azureResourceGroupName --name $webAppName --slot $sourceSlotName --target-slot $targetSlotName --action swap
