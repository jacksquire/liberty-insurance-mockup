const industries = {
  construction: {
    kicker: "Construction Risk",
    title: "Bid, build, bond, and recover with fewer blind spots.",
    copy: "Contract reviews, builder's risk, surety bonding, OSHA tracking, return-to-work planning, and claims documentation operate as one renewal strategy.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=88",
    alt: "Construction team reviewing a project site",
    metricOne: "Contracts",
    metricTwo: "Claims",
    tags: ["Builder's risk", "Surety", "OSHA logs"]
  },
  manufacturing: {
    kicker: "Manufacturing Risk",
    title: "Turn the plant floor into a lower-loss operation.",
    copy: "Workers compensation audits, product liability, fork truck training, machine guarding, cyber exposure, and return-to-work programs get managed as one operating risk.",
    image: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=1400&q=88",
    alt: "Manufacturing floor with industrial equipment",
    metricOne: "Training",
    metricTwo: "Audit",
    tags: ["Workers comp", "Product liability", "Training"]
  },
  healthcare: {
    kicker: "Home Healthcare Risk",
    title: "Protect caregivers, patients, and margins in the same plan.",
    copy: "Lift and transfer training, sensitivity education, state-required coverage, benefits design, and incident documentation support a high-touch business with thin margins.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=88",
    alt: "Healthcare professional reviewing patient information",
    metricOne: "Compliance",
    metricTwo: "Injury",
    tags: ["Compliance", "Caregiver safety", "Benefits"]
  },
  realestate: {
    kicker: "Real Estate Risk",
    title: "Bring valuations, premises liability, and tenant exposure into one view.",
    copy: "Insurance-to-value calculations, slip and fall prevention, service line exposure, habitational coverage, and claims documentation shape better renewal and claim outcomes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88",
    alt: "Commercial real estate buildings",
    metricOne: "Values",
    metricTwo: "Premises",
    tags: ["Property", "Liability", "Valuations"]
  }
};

const tabs = document.querySelectorAll(".industry-tab");
const image = document.querySelector("#industry-image");
const kicker = document.querySelector("#industry-kicker");
const title = document.querySelector("#industry-title");
const copy = document.querySelector("#industry-copy");
const tags = document.querySelector("#industry-tags");
const metricOne = document.querySelector("#metric-one");
const metricTwo = document.querySelector("#metric-two");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const nextIndustry = industries[tab.dataset.industry];

    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    image.src = nextIndustry.image;
    image.alt = nextIndustry.alt;
    kicker.textContent = nextIndustry.kicker;
    title.textContent = nextIndustry.title;
    copy.textContent = nextIndustry.copy;
    metricOne.textContent = nextIndustry.metricOne;
    metricTwo.textContent = nextIndustry.metricTwo;
    tags.replaceChildren(
      ...nextIndustry.tags.map((tag) => {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        return tagElement;
      })
    );
  });
});
