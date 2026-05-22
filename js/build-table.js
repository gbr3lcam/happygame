// =========================
// BUILD TABLE MOCKUP LAYOUT
// =========================

const container =
    document.getElementById(
        "buildTableContainer"
    );


// ===== COMPONENT CELL =====

function createComponentCell(component){

    if(typeof component === "string"){

        return `
            <div class="component-cell">
                <span class="component-name">
                    ${component}
                </span>
            </div>
        `;
    }

    return `

    <div
        class="component-cell"

        data-bs-toggle="popover"

        data-bs-trigger="hover focus"

        data-bs-html="true"

        data-bs-content="
            <div class='popover-card'>

                <img
                    src='${component.image}'
                    class='popover-img'>

                <h6>${component.name}</h6>

                <small>
                    ${component.specs}
                </small>

                <div class='popover-price'>
                    ${component.price}
                </div>

            </div>
        ">

        <div class="component-top">

            <span class="component-name">
                ${component.name}
            </span>

            <span class="component-price">
                ${component.price}
            </span>

        </div>

    </div>
    `;
}


// ===== BUILD GENERATOR =====

function generateBuilds(){

    let html = `

    <!-- LABEL ROW -->

    <div class="table-labels">

        <div></div>

        <div>CPU</div>
        <div>GPU</div>
        <div>PLACA MÃE</div>
        <div>RAM</div>
        <div>SSD</div>
        <div>FONTE</div>

        <div>TOTAL</div>

    </div>
    `;

    builds.forEach((build,index)=>{

        const collapseId =
            `details${index}`;

        html += `

        <div class="build-row">

            <!-- TIER -->

            <div class="
                tier-label
                tier-${index}
            ">
                ${build.tier}
            </div>


            <!-- CENTER -->

            <div class="build-center">

                <!-- COMPONENT ROW -->

                <div class="components-row">

                    ${createComponentCell(build.components.cpu)}
                    ${createComponentCell(build.components.gpu)}
                    ${createComponentCell(build.components.motherboard)}
                    ${createComponentCell(build.components.ram)}
                    ${createComponentCell(build.components.storage)}
                    ${createComponentCell(build.components.psu)}

                </div>


                <!-- DROPDOWN -->

                <button
                    class="details-row"

                    data-bs-toggle="collapse"

                    data-bs-target="#${collapseId}">

                    Clique para detalhes ▼
                </button>

                <div
                    id="${collapseId}"
                    class="collapse">

                    <div class="details-box">

                        <p>
                            ${build.description}
                        </p>

                        <div class="perf-tags">

                            ${build.performance
                                .map(
                                    tag=>`
                                    <span>
                                        ${tag}
                                    </span>
                                `
                                ).join("")}

                        </div>

                    </div>

                </div>

            </div>


            <!-- TOTAL -->

            <div class="total-label">
                ${build.price}
            </div>

        </div>
        `;
    });

    container.innerHTML = html;


    // POPOVER INIT

    document
        .querySelectorAll(
            '[data-bs-toggle="popover"]'
        )
        .forEach(el=>{

            new bootstrap.Popover(
                el,
                {
                    placement:"top",
                    customClass:
                        "hardware-popover"
                }
            );

        });

}

generateBuilds();