// ===== BUILD DATA =====

const builds = [
{
    tier: "Starter",
    price: "R$ 3.200",

    description:
        "Boa para jogos competitivos e uso geral.",

    performance: [
        "1080p High",
        "Esports",
        "Streaming leve"
    ],

    components: {

        cpu: {
            name:"R5 5600",
            price:"R$650",
            image:"https://via.placeholder.com/120",
            specs:"6c / 12t • AM4"
        },

        gpu: {
            name:"RX 6600",
            price:"R$1400",
            image:"https://via.placeholder.com/120",
            specs:"8GB • 1080p"
        },

        motherboard: {
            name:"B550M",
            price:"R$700",
            image:"https://via.placeholder.com/120",
            specs:"AM4 • DDR4"
        },

        ram: {
            name:"16GB DDR4",
            price:"R$300",
            image:"https://via.placeholder.com/120",
            specs:"3200MHz"
        },

        storage: {
            name:"SSD 1TB",
            price:"R$350",
            image:"https://via.placeholder.com/120",
            specs:"NVMe"
        },

        psu: {
            name:"550W",
            price:"R$280",
            image:"https://via.placeholder.com/120",
            specs:"80 Plus"
        }
    }
},
{
    tier: "Gamer",
    price: "R$ 5.500",

    description:
        "Gaming avançado e multitarefa.",

    performance: [
        "1080p Ultra",
        "1440p",
        "Streaming"
    ],

    components: {
        cpu: "Ryzen 7 5700X",
        gpu: "RTX 4060",
        motherboard: "B550",
        ram: "32GB DDR4",
        storage: "SSD 1TB NVMe",
        psu: "650W Gold"
    }
},
{
    tier: "Ultra",
    price: "R$ 9.800",

    description:
        "Alto desempenho e jogos pesados.",

    performance: [
        "1440p Ultra",
        "Ray Tracing",
        "Creator"
    ],

    components: {
        cpu: "7800X3D",
        gpu: "RTX 4070 Super",
        motherboard: "B650",
        ram: "32GB DDR5",
        storage: "SSD 2TB",
        psu: "750W Gold"
    }
}
];