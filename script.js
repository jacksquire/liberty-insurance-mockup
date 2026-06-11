const industries = {
  construction: {
    kicker: "Construction risk",
    title: "Keep projects moving when contracts, crews, and job sites collide.",
    copy: "Contract reviews, builder's risk, surety bonding, return-to-work plans, OSHA tracking, and fall prevention all belong in one operating system.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    alt: "Construction workers reviewing a job site",
    tags: ["Builder's risk", "Surety", "OSHA logs"]
  },
  manufacturing: {
    kicker: "Manufacturing risk",
    title: "Reduce premium drag before claims, audits, and downtime compound.",
    copy: "Workers compensation audits, product liability, fork truck training, cyber exposure, and return-to-work programs need to be managed before renewal pressure hits.",
    image: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=1400&q=85",
    alt: "Manufacturing floor with industrial equipment",
    tags: ["Workers comp", "Product liability", "Training"]
  },
  healthcare: {
    kicker: "Home healthcare risk",
    title: "Protect caregivers, patients, and margins in a high-touch business.",
    copy: "Lift and transfer training, sensitivity education, state-required coverage, and employee benefits strategy help healthcare operators stay compliant and resilient.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
    alt: "Healthcare professional reviewing patient information",
    tags: ["Compliance", "Caregiver safety", "Benefits"]
  },
  realestate: {
    kicker: "Real estate risk",
    title: "Bring property, liability, valuations, and tenant exposure into one view.",
    copy: "Insurance-to-value calculations, slip and fall prevention, service line exposure, habitational coverage, and claims documentation shape better outcomes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    alt: "Commercial real estate buildings",
    tags: ["Property", "Liability", "Valuations"]
  }
};

const tabs = document.querySelectorAll(".industry-tab");
const image = document.querySelector("#industry-image");
const kicker = document.querySelector("#industry-kicker");
const title = document.querySelector("#industry-title");
const copy = document.querySelector("#industry-copy");
const tags = document.querySelector("#industry-tags");

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
    tags.replaceChildren(
      ...nextIndustry.tags.map((tag) => {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        return tagElement;
      })
    );
  });
});
