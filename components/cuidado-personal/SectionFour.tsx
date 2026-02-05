"use client";

import { Chart } from "chart.js";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export default function SectionFour() {
  const t = useTranslations();
  const graph_one = useRef(null);
  const graph_two = useRef(null);
  const graph_three = useRef(null);

  /* Graph one */
  useEffect(() => {
    const config = {
      type: "bar",
      data: {
        labels: ["30 minutes", "1 hour", "90 minutes"],
        datasets: [
          {
            label: "NAOX DERMA",
            data: [28.0, 42.0, 55.0, 60.0],
            backgroundColor: "#662106",
            borderWidth: 1,
          },
          {
            label: "Retinol",
            data: [17.0, 25.0, 29.0],
            backgroundColor: "#588157",
            borderWidth: 1,
          },
          {
            label: "Coenzyme Q10",
            data: [20.0, 28.0, 39.0],
            backgroundColor: "#2474be",
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: true,
          text: "Measured Reduction of ROS formation vs Untreated (RFU)",
        },
        tooltips: {
          enabled: false,
        },
        hover: {
          mode: "nearest" as const,
          intersect: false,
        },
        legend: {
          labels: {
            fontColor: "rgba(0, 0, 0, 0.733)",
          },
          align: "center" as const,
          position: "bottom" as const,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 15,
                callback: function (value: number) {
                  return value.toFixed(2);
                },
              },
              scaleLabel: {
                display: false,
                labelString:
                  "Measured Reduction of ROS formation vs Untreated (RFU)",
              },
            },
          ],
        },
      },
    };
    const ctx = graph_one.current;
    if (ctx) {
      new Chart(ctx, config);
    }
  }, []);

  /* Graph two */
  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["1 hour", "2 hour", "3 hour"],
        datasets: [
          {
            label: "NAOX DERMA",
            data: [11.1, 12.2, 15.8],
            backgroundColor: "#662106",
            borderWidth: 1,
          },
          {
            label: "Retinol",
            data: [3.8, 4.2, 4.2],
            backgroundColor: "#588157",
            borderWidth: 1,
          },
          {
            label: "Coenzyme Q10",
            data: [4.2, 4.8, 6.2],
            backgroundColor: "#2474be",
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: true,
          text: "Measured Reduction of ROS formation vs Untreated (RFU)",
        },
        tooltips: {
          enabled: false,
        },
        hover: {
          mode: "nearest" as "nearest",
          intersect: false,
        },
        legend: {
          labels: {
            fontColor: "rgba(0, 0, 0, 0.733)",
          },
          align: "center" as "center",
          position: "bottom" as "bottom",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                // Opcional: Especifica un stepSize si quieres controlar el intervalo entre ticks
                stepSize: 4,
                // Usa callback para formatear los ticks y mostrar un número específico de decimales
                callback: function (value: number) {
                  // Retorna el valor con dos decimales. Ajusta según necesites.
                  return value.toFixed(2);
                },
              },
              scaleLabel: {
                display: false,
                labelString:
                  "Measured Reduction of ROS formation vs Untreated (RFU)",
              },
            },
          ],
        },
      },
    };
    const ctx = graph_two.current;
    if (ctx) {
      new Chart(ctx, config);
    }
  }, []);

  /* Graph three */
  useEffect(() => {
    const config = {
      type: "bar",
      data: {
        datasets: [
          {
            label: "NAOX DERMA",
            data: [11.5],
            backgroundColor: "#662106",
            borderWidth: 1,
          },
          {
            label: "Retinol",
            data: [12.6],
            backgroundColor: "#588157",
            borderWidth: 1,
          },
          {
            label: "Coenzyme Q10",
            data: [6.8],
            backgroundColor: "#2474be",
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: true,
          text: "Increase in post UVB exposure Cell Viability",
        },
        tooltips: {
          enabled: false,
        },
        hover: {
          mode: "nearest" as "nearest",
          intersect: false,
        },
        legend: {
          labels: {
            fontColor: "rgba(0, 0, 0, 0.733)",
          },
          align: "center" as "center",
          position: "bottom" as "bottom",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 3.5,
                callback: function (value: number) {
                  return value + "%";
                },
              },
              scaleLabel: {
                display: false,
                labelString: "Increase in post UVB exposure Cell Viability",
              },
            },
          ],
        },
      },
    };
    const ctx = graph_three.current;
    if (ctx) {
      new Chart(ctx, config);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 p-6 bg-[#6C7F7D]/20">
        {/*Grafica uno*/}
        <div className="flex flex-col m-2 rounded break-words shadow-lg bg-white">
          <div className="flex rounded-t m-1 px-6 py-6 bg-transparent">
            <div className="flex flex-wrap">
              <div className="flex-grow flex-1 relative w-full max-w-full">
                <h6 className="text-center mb-2 text-xl font-semibold">
                  {t("cp-test-light-blue")}
                </h6>
                <h2 className="text-lg">{t("cp-reduction")}</h2>
              </div>
            </div>
          </div>

          <div className="p-4 mx-1 py-5">
            <div className="h-350-px">
              <canvas id="bar-chart-1" ref={graph_one}></canvas>
            </div>
          </div>

          <div className="flex items-center justify-center p-1 m-3 rounded-3xl bg-amber-900 ">
            <p className="text-center text-white font-bold">
              {t("+89")} {t("vs")} {t("retinol")} <br />
              {t("+58")} {t("vs")} {t("coq")}
            </p>
          </div>
        </div>

        {/*Grafica dos*/}
        <div className="flex flex-col m-2 rounded relative break-words shadow-lg bg-white">
          <div className="flex rounded-t m-1 px-6 py-6 bg-transparent">
            <div className="flex flex-wrap">
              <div className="flex-grow flex-1 relative w-full max-w-full">
                <h2 className="text-center mb-2 text-xl font-semibold uppercase">
                  {t("cp-urban-protection")}
                </h2>
                <h2 className="text-lg text-justify">
                  {t("cp-reduction-urban")}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-4 mx-1 py-5 ">
            <div className="relative h-350-px">
              <canvas id="bar-chart-2" ref={graph_two}></canvas>
            </div>
          </div>

          <div className="flex items-center justify-center p-1 m-3 rounded-3xl bg-amber-900">
            <p className="text-center text-white font-bold">
              {t("+246")} {t("vs")} {t("retinol")} <br />
              {t("+162")} {t("vs")} {t("coq")}
            </p>
          </div>
        </div>

        {/*Grafica tres*/}
        <div className="flex flex-col m-2 rounded relative break-words shadow-lg bg-white">
          <div className="flex rounded-t m-1 px-6 py-[3.4rem] bg-transparent">
            <div className="flex flex-wrap">
              <div className="flex-grow flex-1 relative w-full max-w-full">
                <h2 className="text-center mb-2 text-xl font-semibold uppercase">
                  {t("cp-post-uvb")}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-4 mx-1 py-5">
            <div className="relative h-350-px">
              <canvas id="bar-chart-3" ref={graph_three}></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
