((d) => {
  d.addEventListener("DOMContentLoaded", (e) => {
    const $gprDefault = d.querySelector(".gpr-default-info"),
      $svgMap = d.querySelector(".container-svg"),
      gprStyle =
        "opacity: 1; stroke: rgb(66, 66, 66); stroke-width: 4; fill :rgba(66, 66, 66, 0.1)",
      // Scenarios Box Section Selectors
      $gprScenariosInfo = d.querySelector(".gpr-scenarios-info"),
      $gprScenariosSHover = d.querySelector("#gpr-scenarios-box"),
      $gprScenariosA2aInfo = d.querySelector(".gpr-scenarios-a2a-info"),
      $gprScenariosA2aHover = d.querySelector("#gpr-a2a-box"),
      $gprScenariosB2bInfo = d.querySelector(".gpr-scenarios-b2b-info"),
      $gprScenariosB2bHover = d.querySelector("#gpr-b2b-box"),
      $gprScenariosErpInfo = d.querySelector(".gpr-scenarios-erp-info"),
      $gprScenariosErpHover = d.querySelector("#gpr-erp-box"),
      $gprScenariosCloudInfo = d.querySelector(
        ".gpr-scenarios-cloud-services-info"
      ),
      $gprScenariosCloudHover = d.querySelector("#gpr-cloud-services-box"),
      $gprScenariosSpaInfo = d.querySelector(".gpr-scenarios-spa-info"),
      $gprScenariosSpaHover = d.querySelector("#gpr-spa-box"),
      $gprScenariosMobileAppInfo = d.querySelector(
        ".gpr-scenarios-mobile-app-info"
      ),
      $gprScenariosMobileAppHover = d.querySelector("#gpr-mobile-app-box"),
      $gprScenariosEventDrivenInfo = d.querySelector(
        ".gpr-scenarios-event-driven-info"
      ),
      $gprScenariosEventDrivenHover = d.querySelector("#gpr-event-driven-box"),
      // Extensions Box Section Selectors
      $gprExtensionsInfo = d.querySelector(".gpr-extensions-info"),
      $gprExtensionsHover = d.querySelector("#gpr-extensions-box"),
      $gprExtensionsBuiltAppInfo = d.querySelector(".gpr-built-in-app-info"),
      $gprExtensionsBuiltAppHover = d.querySelector("#gpr-built-in-app-box"),
      $gprExtensionsEmbeddedAppInfo = d.querySelector(".gpr-embedded-app-info"),
      $gprExtensionsEmbeddedAppHover = d.querySelector("#gpr-embedded-app-box"),
      // Governance Box Section Selectors
      $gprGovernanceInfo = d.querySelector(".gpr-governance-info"),
      $gprGovernanceSHover = d.querySelector("#gpr-governance-box"),
      $gprGovernanceRoleBasedUserInfo = d.querySelector(
        ".gpr-role-based-user-info"
      ),
      $gprGovernanceRoleBasedUserHover = d.querySelector(
        "#gpr-role-based-user-box"
      ),
      $gprMultitenancyInfo = d.querySelector(".gpr-multitenancy-info"),
      $gprMultitenancyHover = d.querySelector("#gpr-multitenancy-box"),
      // Core Box Section Selectors
      $gprCoreInfo = d.querySelector(".gpr-core-info"),
      $gprCoreHover = d.querySelector("#gpr-core-box"),
      // Flow Box Section Selectors
      $gprFlowInfo = d.querySelector(".gpr-flow-info"),
      $gprFlowHover = d.querySelector("#gpr-flow-box"),
      // Pic Box Section Selectors
      $gprPicInfo = d.querySelector(".gpr-pic-info"),
      $gprPicHover = d.querySelector("#gpr-pic-box"),
      // Format pma Box Section Selectors
      $gprFormatInfo = d.querySelector(".gpr-format-pma-info"),
      $gprFormatHover = d.querySelector("#gpr-format-pma-box"),
      // Monitoring Box Section Selectors
      $gprMonitoringInfo = d.querySelector(".gpr-monitoring-info"),
      $gprMonitoringHover = d.querySelector("#gpr-monitoring-box"),
      // Operation Box Section Selectors
      $gprOperationInfo = d.querySelector(".gpr-operation-info"),
      $gprOperationHover = d.querySelector("#gpr-operation-box"),
      // Integrations Box Section Selectors
      $gprIntegrationsInfo = d.querySelector(".gpr-integrations-info"),
      $gprIntegrationsHover = d.querySelector("#gpr-integrations-box"),
      // Deploy Box Section Selectors
      $gprDeployInfo = d.querySelector(".gpr-deploy-info"),
      $gprDeployHover = d.querySelector("#gpr-deploy-box");

    // Functions section to apply box styles
    const gprScenariosBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprScenariosInfo.style.opacity = "1";
      $gprScenariosSHover.style.cssText = gprStyle;
    };

    const gprA2aBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprScenariosA2aInfo.style.opacity = "1";
      $gprScenariosA2aHover.style.cssText = gprStyle;
    };

    const gprB2bBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprScenariosB2bInfo.style.opacity = "1";
      $gprScenariosB2bHover.style.cssText = gprStyle;
    };

    const gprErpBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprScenariosErpInfo.style.opacity = "1";
      $gprScenariosErpHover.style.cssText = gprStyle;
    };

    const gprCloudBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprScenariosCloudInfo.style.opacity = "1";
      $gprScenariosCloudHover.style.cssText = gprStyle;
    };

    const gprSpaBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprScenariosSpaInfo.style.opacity = "1";
      $gprScenariosSpaHover.style.cssText = gprStyle;
    };

    const gprMobileAppBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprScenariosMobileAppInfo.style.opacity = "1";
      $gprScenariosMobileAppHover.style.cssText = gprStyle;
    };

    const gprEventDrivenBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprScenariosEventDrivenInfo.style.opacity = "1";
      $gprScenariosEventDrivenHover.style.cssText = gprStyle;
    };

    const gprExtensionsBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprExtensionsInfo.style.opacity = "1";
      $gprExtensionsHover.style.cssText = gprStyle;
    };

    const gprBuiltAppBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprExtensionsBuiltAppInfo.style.opacity = "1";
      $gprExtensionsBuiltAppHover.style.cssText = gprStyle;
    };

    const gprEmbeddedAppBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprExtensionsEmbeddedAppInfo.style.opacity = "1";
      $gprExtensionsEmbeddedAppHover.style.cssText = gprStyle;
    };

    const gprGovernanceBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprGovernanceInfo.style.opacity = "1";
      $gprGovernanceSHover.style.cssText = gprStyle;
    };

    const gprGovernanceRoleBasedUserBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprGovernanceRoleBasedUserInfo.style.opacity = "1";
      $gprGovernanceRoleBasedUserHover.style.cssText = gprStyle;
    };

    const gprMultitenancyBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprMultitenancyInfo.style.opacity = "1";
      $gprMultitenancyHover.style.cssText = gprStyle;
    };

    const gprCoreBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprCoreInfo.style.opacity = "1";
      $gprCoreHover.style.cssText = gprStyle;
    };

    const gprFlowBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprFlowInfo.style.opacity = "1";
      $gprFlowHover.style.cssText = gprStyle;
    };

    const gprPicBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprPicInfo.style.opacity = "1";
      $gprPicHover.style.cssText = gprStyle;
    };

    const gprFormatPmaBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprFormatInfo.style.opacity = "1";
      $gprFormatHover.style.cssText = gprStyle;
    };

    const gprMonitoringBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprMonitoringInfo.style.opacity = "1";
      $gprMonitoringHover.style.cssText = gprStyle;
    };

    const gprOperationBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprOperationInfo.style.opacity = "1";
      $gprOperationHover.style.cssText = gprStyle;
    };

    const gprIntegrationsBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprIntegrationsInfo.style.opacity = "1";
      $gprIntegrationsHover.style.cssText = gprStyle;
    };

    const gprDeployBoxApplyStyle = () => {
      $gprDefault.style.opacity = "0";
      $gprDeployInfo.style.opacity = "1";
      $gprDeployHover.style.cssText = gprStyle;
    };

    // Functions section to remove box styles
    const gprA2aBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprScenariosA2aInfo.style.opacity = "0";
      $gprScenariosA2aHover.removeAttribute("style");
    };

    const gprScenariosBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprScenariosInfo.style.opacity = "0";
      $gprScenariosSHover.removeAttribute("style");
    };

    const gprB2bBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprScenariosB2bInfo.style.opacity = "0";
      $gprScenariosB2bHover.removeAttribute("style");
    };

    const gprErpBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprScenariosErpInfo.style.opacity = "0";
      $gprScenariosErpHover.removeAttribute("style");
    };

    const gprCloudBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprScenariosCloudInfo.style.opacity = "0";
      $gprScenariosCloudHover.removeAttribute("style");
    };

    const gprSpaBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprScenariosSpaInfo.style.opacity = "0";
      $gprScenariosSpaHover.removeAttribute("style");
    };

    const gprMobileAppBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprScenariosMobileAppInfo.style.opacity = "0";
      $gprScenariosMobileAppHover.removeAttribute("style");
    };

    const gprEventDrivenBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprScenariosEventDrivenInfo.style.opacity = "0";
      $gprScenariosEventDrivenHover.removeAttribute("style");
    };

    const gprExtensionsBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprExtensionsInfo.style.opacity = "0";
      $gprExtensionsHover.removeAttribute("style");
    };

    const gprBuiltAppBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprExtensionsBuiltAppInfo.style.opacity = "0";
      $gprExtensionsBuiltAppHover.removeAttribute("style");
    };

    const gprEmbeddedAppBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprExtensionsEmbeddedAppInfo.style.opacity = "0";
      $gprExtensionsEmbeddedAppHover.removeAttribute("style");
    };

    const gprGovernanceBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprGovernanceInfo.style.opacity = "0";
      $gprGovernanceSHover.removeAttribute("style");
    };

    const gprCoreBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprCoreInfo.style.opacity = "0";
      $gprCoreHover.removeAttribute("style");
    };

    const gprFlowBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprFlowInfo.style.opacity = "0";
      $gprFlowHover.removeAttribute("style");
    };

    const gprPicBoxRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprPicInfo.style.opacity = "0";
      $gprPicHover.removeAttribute("style");
    };

    const gpFormatPmaRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprFormatInfo.style.opacity = "0";
      $gprFormatHover.removeAttribute("style");
    };

    const gpMonitoringRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprMonitoringInfo.style.opacity = "0";
      $gprMonitoringHover.removeAttribute("style");
    };

    const gpOperationRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprOperationInfo.style.opacity = "0";
      $gprOperationHover.removeAttribute("style");
    };

    const gpIntegrationsRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprIntegrationsInfo.style.opacity = "0";
      $gprIntegrationsHover.removeAttribute("style");
    };

    const gpDeployRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprDeployInfo.style.opacity = "0";
      $gprDeployHover.removeAttribute("style");
    };

    const gpGovernanceRoleBasedUserRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprGovernanceRoleBasedUserInfo.style.opacity = "0";
      $gprGovernanceRoleBasedUserHover.removeAttribute("style");
    };

    const gprMultitenancyRemoveStyle = () => {
      $gprDefault.style.opacity = "1";
      $gprMultitenancyInfo.style.opacity = "0";
      $gprMultitenancyHover.removeAttribute("style");
    };

    // End Functions Section

    // Mouse over boxes Section
    $svgMap.addEventListener("mouseover", (e) => {
      e.preventDefault();

      switch (e.target.id) {
        // scenarios section
        case "gpr-scenarios-box":
          gprScenariosBoxApplyStyle();
          break;
        case "gpr-scenarios-text-box":
          gprScenariosBoxApplyStyle();
          break;
        case " gpr-scenarios-box-1":
          gprScenariosBoxApplyStyle();
          break;
        case "gpr-a2a-box":
          gprA2aBoxApplyStyle();
          break;
        case "gpr-a2a-text-box":
          gprA2aBoxApplyStyle();
          break;
        case "gpr-b2b-box":
          gprB2bBoxApplyStyle();
          break;
        case "gpr-b2b-text-box":
          gprB2bBoxApplyStyle();
          break;
        case "gpr-erp-box":
          gprErpBoxApplyStyle();
          break;
        case "gpr-erp-text-box":
          gprErpBoxApplyStyle();
          break;
        case "gpr-cloud-services-box":
          gprCloudBoxApplyStyle();
          break;
        case "gpr-cloud-services-text1-box":
          gprCloudBoxApplyStyle();
          break;
        case "gpr-cloud-services-text2-box":
          gprCloudBoxApplyStyle();
          break;
        case "gpr-spa-box":
          gprSpaBoxApplyStyle();
          break;
        case "gpr-spa-text-box":
          gprSpaBoxApplyStyle();
          break;
        case "gpr-mobile-app-box":
          gprMobileAppBoxApplyStyle();
          break;
        case "gpr-mobile-app-text-box":
          gprMobileAppBoxApplyStyle();
          break;
        case "gpr-event-driven-box":
          gprEventDrivenBoxApplyStyle();
          break;
        case "gpr-event-driven-text-box":
          gprEventDrivenBoxApplyStyle();
          break;
        // governance section
        case "gpr-governance-box":
          gprGovernanceBoxApplyStyle();
          break;
        case "gpr-role-based-user-box":
          gprGovernanceRoleBasedUserBoxApplyStyle();
          break;
        case "gpr-role-based-user-text1-box":
          gprGovernanceRoleBasedUserBoxApplyStyle();
          break;
        case "gpr-role-based-user-text2-box":
          gprGovernanceRoleBasedUserBoxApplyStyle();
          break;
        case "gpr-multitenancy-box":
          gprMultitenancyBoxApplyStyle();
          break;
        case "gpr-multitenancy-text-box":
          gprMultitenancyBoxApplyStyle();
          break;

        case "gpr-core-box":
          gprCoreBoxApplyStyle();
          break;
        case "gpr-flow-box":
          gprFlowBoxApplyStyle();
          break;
        case "gpr-pic-box":
          gprPicBoxApplyStyle();
          break;
        case "gpr-format-pma-box":
          gprFormatPmaBoxApplyStyle();
          break;
        case "gpr-monitoring-box":
          gprMonitoringBoxApplyStyle();
          break;
        case "gpr-operation-box":
          gprOperationBoxApplyStyle();
          break;
        case "gpr-extensions-box":
          gprExtensionsBoxApplyStyle();
          break;
        case "gpr-extensions-text-box":
          gprExtensionsBoxApplyStyle();
          break;
        case "gpr-built-in-app-box":
          gprBuiltAppBoxApplyStyle();
          break;
        case "gpr-built-in-app-text-box":
          gprBuiltAppBoxApplyStyle();
          break;
        case "gpr-embedded-app-box":
          gprEmbeddedAppBoxApplyStyle();
          break;
        case "gpr-embedded-app-text-box":
          gprEmbeddedAppBoxApplyStyle();
          break;
        case "gpr-integrations-box":
          gprIntegrationsBoxApplyStyle();
          break;
        case "gpr-deploy-box":
          gprDeployBoxApplyStyle();
          break;
        default:
          break;
      }
    });

    // Mouse out boxes Section
    $svgMap.addEventListener("mouseout", (e) => {
      e.preventDefault();
      // scenarios section
      switch (e.target.id) {
        case "gpr-scenarios-box":
          gprScenariosBoxRemoveStyle();
          break;
        case "gpr-scenarios-box-1":
          gprScenariosBoxRemoveStyle();
          break;
        case "gpr-scenarios-text-box":
          gprScenariosBoxRemoveStyle();
          break;
        case "gpr-a2a-box":
          gprA2aBoxRemoveStyle();
          break;
        case "gpr-a2a-text-box":
          gprA2aBoxRemoveStyle();
          break;
        case "gpr-b2b-box":
          gprB2bBoxRemoveStyle();
          break;
        case "gpr-b2b-text-box":
          gprB2bBoxRemoveStyle();
          break;
        case "gpr-erp-box":
          gprErpBoxRemoveStyle();
          break;
        case "gpr-erp-text-box":
          gprErpBoxRemoveStyle();
          break;
        case "gpr-cloud-services-box":
          gprCloudBoxRemoveStyle();
          break;
        case "gpr-cloud-services-text1-box":
          gprCloudBoxRemoveStyle();
          break;
        case "gpr-cloud-services-text2-box":
          gprCloudBoxRemoveStyle();
          break;
        case "gpr-spa-box":
          gprSpaBoxRemoveStyle();
          break;
        case "gpr-spa-text-box":
          gprSpaBoxRemoveStyle();
          break;
        case "gpr-mobile-app-box":
          gprMobileAppBoxRemoveStyle();
          break;
        case "gpr-mobile-app-text-box":
          gprMobileAppBoxRemoveStyle();
          break;
        case "gpr-event-driven-box":
          gprEventDrivenBoxRemoveStyle();
          break;
        case "gpr-event-driven-text-box":
          gprEventDrivenBoxRemoveStyle();
          break;
        // governance section
        case "gpr-governance-box":
          gprGovernanceBoxRemoveStyle();
          break;
        case "gpr-role-based-user-box":
          gpGovernanceRoleBasedUserRemoveStyle();
          break;
        case "gpr-role-based-user-text1-box":
          gpGovernanceRoleBasedUserRemoveStyle();
          break;
        case "gpr-role-based-user-text2-box":
          gpGovernanceRoleBasedUserRemoveStyle();
          break;
        case "gpr-multitenancy-box":
          gprMultitenancyRemoveStyle();
          break;
        case "gpr-multitenancy-text-box":
          gprMultitenancyRemoveStyle();
          break;

        case "gpr-core-box":
          gprCoreBoxRemoveStyle();
          break;
        case "gpr-flow-box":
          gprFlowBoxRemoveStyle();
          break;
        case "gpr-pic-box":
          gprPicBoxRemoveStyle();
          break;
        case "gpr-format-pma-box":
          gpFormatPmaRemoveStyle();
          break;
        case "gpr-monitoring-box":
          gpMonitoringRemoveStyle();
          break;
        case "gpr-operation-box":
          gpOperationRemoveStyle();
          break;
        case "gpr-extensions-box":
          gprExtensionsBoxRemoveStyle();
          break;
        case "gpr-extensions-text-box":
          gprExtensionsBoxRemoveStyle();
          break;
        case "gpr-built-in-app-box":
          gprBuiltAppBoxRemoveStyle();
          break;
        case "gpr-built-in-app-text-box":
          gprBuiltAppBoxRemoveStyle();
          break;
        case "gpr-embedded-app-box":
          gprEmbeddedAppBoxRemoveStyle();
          break;
        case "gpr-embedded-app-text-box":
          gprEmbeddedAppBoxRemoveStyle();
          break;
        case "gpr-integrations-box":
          gpIntegrationsRemoveStyle();
          break;
        case "gpr-deploy-box":
          gpDeployRemoveStyle();
          break;
        default:
          break;
      }
    });
  });
})(document);
