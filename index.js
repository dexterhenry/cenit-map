((d) => {
  d.addEventListener("DOMContentLoaded", (e) => {
    const $gprDefault = d.querySelector(".gpr-default-info"),
      $svgMap = d.querySelector(".container-svg"),
      gprStyle =
        "opacity: 1; stroke: rgb(66, 66, 66); stroke-width: 4; fill :rgba(66, 66, 66, 0.1)";
    $svgMap.addEventListener("mousemove", (e) => {
      e.preventDefault();

      switch (e.target.id) {
        case "gpr-scenarios-hover" || "gpr-scenarios-hover-1":
          $gprDefault.style.opacity = "0";

          const $gprScenariosInfo = d.querySelector(".gpr-scenarios-info"),
            $gprScenariosSHover = d.querySelector("#gpr-scenarios-hover");

          $gprScenariosInfo.style.opacity = "1";
          $gprScenariosSHover.style.cssText = gprStyle;
          break;
        case "gpr-scenarios-hover-1":
          $gprDefault.style.opacity = "0";

          const $gprScenariosInfo1 = d.querySelector(".gpr-scenarios-info"),
            $gprScenariosSHover1 = d.querySelector("#gpr-scenarios-hover");

          $gprScenariosInfo1.style.opacity = "1";
          $gprScenariosSHover1.style.cssText = gprStyle;
          break;

        case "gpr-governance-hover":
          $gprDefault.style.opacity = "0";

          const $gprGovernanceInfo = d.querySelector(".gpr-governance-info"),
            $gprGovernanceSHover = d.querySelector("#gpr-governance-hover");

          $gprGovernanceInfo.style.opacity = "1";
          $gprGovernanceSHover.style.cssText = gprStyle;
          break;

        case "gpr-core-hover":
          $gprDefault.style.opacity = "0";

          const $gprCoreInfo = d.querySelector(".gpr-core-info"),
            $gprCoreHover = d.querySelector("#gpr-core-hover");

          $gprCoreInfo.style.opacity = "1";
          $gprCoreHover.style.cssText = gprStyle;
          break;

        case "gpr-flow-hover":
          $gprDefault.style.opacity = "0";

          const $gprFlowInfo = d.querySelector(".gpr-flow-info"),
            $gprFlowHover = d.querySelector("#gpr-flow-hover");

          $gprFlowInfo.style.opacity = "1";
          $gprFlowHover.style.cssText = gprStyle;
          break;

        case "gpr-pic-hover":
          $gprDefault.style.opacity = "0";

          const $gprPicInfo = d.querySelector(".gpr-pic-info"),
            $gprPicHover = d.querySelector("#gpr-pic-hover");

          $gprPicInfo.style.opacity = "1";
          $gprPicHover.style.cssText = gprStyle;
          break;

        case "gpr-format-pma-hover":
          $gprDefault.style.opacity = "0";

          const $gprFormatInfo = d.querySelector(".gpr-format-pma-info"),
            $gprFormatHover = d.querySelector("#gpr-format-pma-hover");

          $gprFormatInfo.style.opacity = "1";
          $gprFormatHover.style.cssText = gprStyle;
          break;

        case "gpr-monitoring-hover":
          $gprDefault.style.opacity = "0";

          const $gprMonitoringInfo = d.querySelector(".gpr-monitoring-info"),
            $gprMonitoringHover = d.querySelector("#gpr-monitoring-hover");

          $gprMonitoringInfo.style.opacity = "1";
          $gprMonitoringHover.style.cssText = gprStyle;
          break;

        case "gpr-operation-hover":
          $gprDefault.style.opacity = "0";

          const $gprOperationInfo = d.querySelector(".gpr-operation-info"),
            $gprOperationHover = d.querySelector("#gpr-operation-hover");

          $gprOperationInfo.style.opacity = "1";
          $gprOperationHover.style.cssText = gprStyle;
          break;

        case "gpr-extensions-hover":
          $gprDefault.style.opacity = "0";

          const $gprExtensionsInfo = d.querySelector(".gpr-extensions-info"),
            $gprExtensionsHover = d.querySelector("#gpr-extensions-hover");

          $gprExtensionsInfo.style.opacity = "1";
          $gprExtensionsHover.style.cssText = gprStyle;
          break;

        case "gpr-integrations-hover":
          $gprDefault.style.opacity = "0";

          const $gprIntegrationsInfo = d.querySelector(
              ".gpr-integrations-info"
            ),
            $gprIntegrationsHover = d.querySelector("#gpr-integrations-hover");

          $gprIntegrationsInfo.style.opacity = "1";
          $gprIntegrationsHover.style.cssText = gprStyle;
          break;

        case "gpr-deploy-hover":
          $gprDefault.style.opacity = "0";

          const $gprDeployInfo = d.querySelector(".gpr-deploy-info"),
            $gprDeployHover = d.querySelector("#gpr-deploy-hover");

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
        case "gpr-scenarios-hover":
          $gprDefault.style.opacity = "1";

          const $gprScenariosInfo = d.querySelector(".gpr-scenarios-info"),
            $gprScenariosSHover = d.querySelector("#gpr-scenarios-hover");

          $gprScenariosInfo.style.opacity = "0";
          $gprScenariosSHover.removeAttribute("style");
          break;
        case "gpr-scenarios-hover-1":
          $gprDefault.style.opacity = "1";

          const $gprScenariosInfo1 = d.querySelector(".gpr-scenarios-info"),
            $gprScenariosSHover1 = d.querySelector("#gpr-scenarios-hover");

          $gprScenariosInfo1.style.opacity = "0";
          $gprScenariosSHover1.removeAttribute("style");
          break;

        case "gpr-governance-hover":
          $gprDefault.style.opacity = "1";

          const $gprGovernanceInfo = d.querySelector(".gpr-governance-info"),
            $gprGovernanceSHover = d.querySelector("#gpr-governance-hover");

          $gprGovernanceInfo.style.opacity = "0";
          $gprGovernanceSHover.removeAttribute("style");
          break;

        case "gpr-core-hover":
          $gprDefault.style.opacity = "1";

          const $gprCoreInfo = d.querySelector(".gpr-core-info"),
            $gprCoreHover = d.querySelector("#gpr-core-hover");

          $gprCoreInfo.style.opacity = "0";
          $gprCoreHover.removeAttribute("style");
          break;

        case "gpr-flow-hover":
          $gprDefault.style.opacity = "1";

          const $gprFlowInfo = d.querySelector(".gpr-flow-info"),
            $gprFlowHover = d.querySelector("#gpr-flow-hover");

          $gprFlowInfo.style.opacity = "0";
          $gprFlowHover.removeAttribute("style");
          break;

        case "gpr-pic-hover":
          $gprDefault.style.opacity = "1";

          const $gprPicInfo = d.querySelector(".gpr-pic-info"),
            $gprPicHover = d.querySelector("#gpr-pic-hover");

          $gprPicInfo.style.opacity = "0";
          $gprPicHover.removeAttribute("style");
          break;

        case "gpr-format-pma-hover":
          $gprDefault.style.opacity = "1";

          const $gprFormatInfo = d.querySelector(".gpr-format-pma-info"),
            $gprFormatHover = d.querySelector("#gpr-format-pma-hover");

          $gprFormatInfo.style.opacity = "0";
          $gprFormatHover.removeAttribute("style");
          break;

        case "gpr-monitoring-hover":
          $gprDefault.style.opacity = "1";

          const $gprMonitoringInfo = d.querySelector(".gpr-monitoring-info"),
            $gprMonitoringHover = d.querySelector("#gpr-monitoring-hover");

          $gprMonitoringInfo.style.opacity = "0";
          $gprMonitoringHover.removeAttribute("style");
          break;

        case "gpr-operation-hover":
          $gprDefault.style.opacity = "1";

          const $gprOperationInfo = d.querySelector(".gpr-operation-info"),
            $gprOperationHover = d.querySelector("#gpr-operation-hover");

          $gprOperationInfo.style.opacity = "0";
          $gprOperationHover.removeAttribute("style");
          break;

        case "gpr-extensions-hover":
          $gprDefault.style.opacity = "1";

          const $gprExtensionsInfo = d.querySelector(".gpr-extensions-info"),
            $gprExtensionsHover = d.querySelector("#gpr-extensions-hover");

          $gprExtensionsInfo.style.opacity = "0";
          $gprExtensionsHover.removeAttribute("style");
          break;

        case "gpr-integrations-hover":
          $gprDefault.style.opacity = "1";

          const $gprIntegrationsInfo = d.querySelector(
              ".gpr-integrations-info"
            ),
            $gprIntegrationsHover = d.querySelector("#gpr-integrations-hover");

          $gprIntegrationsInfo.style.opacity = "0";
          $gprIntegrationsHover.removeAttribute("style");
          break;

        case "gpr-deploy-hover":
          $gprDefault.style.opacity = "1";

          const $gprDeployInfo = d.querySelector(".gpr-deploy-info"),
            $gprDeployHover = d.querySelector("#gpr-deploy-hover");

          $gprDeployInfo.style.opacity = "0";
          $gprDeployHover.removeAttribute("style");
          break;
        default:
          break;
      }
    });
  });
})(document);
