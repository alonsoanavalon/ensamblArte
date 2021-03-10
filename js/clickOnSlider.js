const d = document;

export default function clickOnSlider (slider, link) {
    let $slider = d.querySelector(slider)

    $slider.addEventListener("click", e => {
        location.href = "https://listado.mercadolibre.cl/_CustId_45807732"
    })
}