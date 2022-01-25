((d) => {
  d.addEventListener("DOMContentLoaded", (e) => {
    const $gprDefault = d.querySelector(".gpr-default-info"),
      $svgMap = d.querySelector(".container-svg"),
      gprStyle =
        "opacity: 1; stroke: rgb(66, 66, 66); stroke-width: 4; fill :rgba(66, 66, 66, 0.1)";
    $svgMap.addEventListener("mouseover", (e) => {
      e.preventDefault();

      switch (e.target.id) {
        case "gpr-scenarios-box" || "gpr-scenarios-box-1":
          $gprDefault.style.opacity = "0";

          const $gprScenariosInfo = d.querySelector(".gpr-scenarios-info"),
            $gprScenariosSHover = d.querySelector("#gpr-scenarios-box");

          $gprScenariosInfo.style.opacity = "1";
          $gprScenariosSHover.style.cssText = gprStyle;
          break;
        case "gpr-scenarios-box-1":
          $gprDefault.style.opacity = "0";

          const $gprScenariosInfo1 = d.querySelector(".gpr-scenarios-info"),
            $gprScenariosSHover1 = d.querySelector("#gpr-scenarios-box");

          $gprScenariosInfo1.style.opacity = "1";
          $gprScenariosSHover1.style.cssText = gprStyle;
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
          $gprDefault.style.opacity = "0";

          const $gprExtensionsInfo = d.querySelector(".gpr-extensions-info"),
            $gprExtensionsHover = d.querySelector("#gpr-extensions-box");

          $gprExtensionsInfo.style.opacity = "1";
          $gprExtensionsHover.style.cssText = gprStyle;
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
          $gprDefault.style.opacity = "1";

          const $gprScenariosInfo = d.querySelector(".gpr-scenarios-info"),
            $gprScenariosSHover = d.querySelector("#gpr-scenarios-box");

          $gprScenariosInfo.style.opacity = "0";
          $gprScenariosSHover.removeAttribute("style");
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
          $gprDefault.style.opacity = "1";

          const $gprExtensionsInfo = d.querySelector(".gpr-extensions-info"),
            $gprExtensionsHover = d.querySelector("#gpr-extensions-box");

          $gprExtensionsInfo.style.opacity = "0";
          $gprExtensionsHover.removeAttribute("style");
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
