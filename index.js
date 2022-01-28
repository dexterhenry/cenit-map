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
      $gprExtensionsEmbeddedAppHover = d.querySelector("#gpr-embedded-app-box");

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

    $svgMap.addEventListener("mouseover", (e) => {
      e.preventDefault();

      switch (e.target.id) {
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
        case "gpr-governance-box":
          $gprDefault.style.opacity = "0";

          const $gprGovernanceInfo = d.querySelector(".gpr-governance-info"),
            $gprGovernanceSHover = d.querySelector("#gpr-governance-box");

          $gprGovernanceInfo.style.opacity = "1";
          $gprGovernanceSHover.style.cssText = gprStyle;
          break;

        case "gpr-core-box":
          $gprDefault.style.opacity = "0";

          const $gprCoreInfo = d.querySelector(".gpr-core-info"),
            $gprCoreHover = d.querySelector("#gpr-core-box");

          $gprCoreInfo.style.opacity = "1";
          $gprCoreHover.style.cssText = gprStyle;
          break;

        case "gpr-flow-box":
          $gprDefault.style.opacity = "0";

          const $gprFlowInfo = d.querySelector(".gpr-flow-info"),
            $gprFlowHover = d.querySelector("#gpr-flow-box");

          $gprFlowInfo.style.opacity = "1";
          $gprFlowHover.style.cssText = gprStyle;
          break;

        case "gpr-pic-box":
          $gprDefault.style.opacity = "0";

          const $gprPicInfo = d.querySelector(".gpr-pic-info"),
            $gprPicHover = d.querySelector("#gpr-pic-box");

          $gprPicInfo.style.opacity = "1";
          $gprPicHover.style.cssText = gprStyle;
          break;

        case "gpr-format-pma-box":
          $gprDefault.style.opacity = "0";

          const $gprFormatInfo = d.querySelector(".gpr-format-pma-info"),
            $gprFormatHover = d.querySelector("#gpr-format-pma-box");

          $gprFormatInfo.style.opacity = "1";
          $gprFormatHover.style.cssText = gprStyle;
          break;

        case "gpr-monitoring-box":
          $gprDefault.style.opacity = "0";

          const $gprMonitoringInfo = d.querySelector(".gpr-monitoring-info"),
            $gprMonitoringHover = d.querySelector("#gpr-monitoring-box");

          $gprMonitoringInfo.style.opacity = "1";
          $gprMonitoringHover.style.cssText = gprStyle;
          break;

        case "gpr-operation-box":
          $gprDefault.style.opacity = "0";

          const $gprOperationInfo = d.querySelector(".gpr-operation-info"),
            $gprOperationHover = d.querySelector("#gpr-operation-box");

          $gprOperationInfo.style.opacity = "1";
          $gprOperationHover.style.cssText = gprStyle;
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
          $gprDefault.style.opacity = "0";

          const $gprIntegrationsInfo = d.querySelector(
              ".gpr-integrations-info"
            ),
            $gprIntegrationsHover = d.querySelector("#gpr-integrations-box");

          $gprIntegrationsInfo.style.opacity = "1";
          $gprIntegrationsHover.style.cssText = gprStyle;
          break;

        case "gpr-deploy-box":
          $gprDefault.style.opacity = "0";

          const $gprDeployInfo = d.querySelector(".gpr-deploy-info"),
            $gprDeployHover = d.querySelector("#gpr-deploy-box");

          $gprDeployInfo.style.opacity = "1";
          $gprDeployHover.style.cssText = gprStyle;
          break;
        default:
          break;
      }
    });

    $svgMap.addEventListener("mouseout", (e) => {
      e.preventDefault();

      switch (e.target.id) {
        case "gpr-scenarios-box":
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
        case "gpr-erp-box":
          gprErpBoxRemoveStyle();
          break;
        case "gpr-erp-text-box":
          gprErpBoxRemoveStyle();
          break;
        case "gpr-cloud-services-box":
          gprCloudBoxRemoveStyle();
          break;
        case "gpr-spa-box":
          gprSpaBoxRemoveStyle();
          break;
        case "gpr-mobile-app-box":
          gprMobileAppBoxRemoveStyle();
          break;
        case "gpr-event-driven-box":
          gprEventDrivenBoxRemoveStyle();
          break;

        case "gpr-scenarios-box-1":
          $gprDefault.style.opacity = "1";

          const $gprScenariosInfo1 = d.querySelector(".gpr-scenarios-info"),
            $gprScenariosSHover1 = d.querySelector("#gpr-scenarios-box");

          $gprScenariosInfo1.style.opacity = "0";
          $gprScenariosSHover1.removeAttribute("style");
          break;

        case "gpr-governance-box":
          $gprDefault.style.opacity = "1";

          const $gprGovernanceInfo = d.querySelector(".gpr-governance-info"),
            $gprGovernanceSHover = d.querySelector("#gpr-governance-box");

          $gprGovernanceInfo.style.opacity = "0";
          $gprGovernanceSHover.removeAttribute("style");
          break;

        case "gpr-core-box":
          $gprDefault.style.opacity = "1";

          const $gprCoreInfo = d.querySelector(".gpr-core-info"),
            $gprCoreHover = d.querySelector("#gpr-core-box");

          $gprCoreInfo.style.opacity = "0";
          $gprCoreHover.removeAttribute("style");
          break;

        case "gpr-flow-box":
          $gprDefault.style.opacity = "1";

          const $gprFlowInfo = d.querySelector(".gpr-flow-info"),
            $gprFlowHover = d.querySelector("#gpr-flow-box");

          $gprFlowInfo.style.opacity = "0";
          $gprFlowHover.removeAttribute("style");
          break;

        case "gpr-pic-box":
          $gprDefault.style.opacity = "1";

          const $gprPicInfo = d.querySelector(".gpr-pic-info"),
            $gprPicHover = d.querySelector("#gpr-pic-box");

          $gprPicInfo.style.opacity = "0";
          $gprPicHover.removeAttribute("style");
          break;

        case "gpr-format-pma-box":
          $gprDefault.style.opacity = "1";

          const $gprFormatInfo = d.querySelector(".gpr-format-pma-info"),
            $gprFormatHover = d.querySelector("#gpr-format-pma-box");

          $gprFormatInfo.style.opacity = "0";
          $gprFormatHover.removeAttribute("style");
          break;

        case "gpr-monitoring-box":
          $gprDefault.style.opacity = "1";

          const $gprMonitoringInfo = d.querySelector(".gpr-monitoring-info"),
            $gprMonitoringHover = d.querySelector("#gpr-monitoring-box");

          $gprMonitoringInfo.style.opacity = "0";
          $gprMonitoringHover.removeAttribute("style");
          break;

        case "gpr-operation-box":
          $gprDefault.style.opacity = "1";

          const $gprOperationInfo = d.querySelector(".gpr-operation-info"),
            $gprOperationHover = d.querySelector("#gpr-operation-box");

          $gprOperationInfo.style.opacity = "0";
          $gprOperationHover.removeAttribute("style");
          break;

        case "gpr-extensions-box":
          gprExtensionsBoxRemoveStyle();
          break;
        case "gpr-built-in-app-box":
          gprBuiltAppBoxRemoveStyle();
          break;
        case "gpr-embedded-app-box":
          gprEmbeddedAppBoxRemoveStyle();
          break;
        case "gpr-integrations-box":
          $gprDefault.style.opacity = "1";

          const $gprIntegrationsInfo = d.querySelector(
              ".gpr-integrations-info"
            ),
            $gprIntegrationsHover = d.querySelector("#gpr-integrations-box");

          $gprIntegrationsInfo.style.opacity = "0";
          $gprIntegrationsHover.removeAttribute("style");
          break;

        case "gpr-deploy-box":
          $gprDefault.style.opacity = "1";

          const $gprDeployInfo = d.querySelector(".gpr-deploy-info"),
            $gprDeployHover = d.querySelector("#gpr-deploy-box");

          $gprDeployInfo.style.opacity = "0";
          $gprDeployHover.removeAttribute("style");
          break;
        default:
          break;
      }
    });
  });
})(document);
