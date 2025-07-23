import Link from "next/link";
import React from "react";
export default function page () {
  const data = [
  {
    "id": "1",
    "service_name": "Web Development",
    "service_image": "https://cdn-icons-png.flaticon.com/512/1006/1006360.png",
    "service_description": "Building responsive and modern websites using HTML, CSS, JavaScript, and React."
  },
  {
    "id": "2",
    "service_name": "Graphic Design",
    "service_image": "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    "service_description": "Creating visually appealing graphics for brands, marketing, and user interfaces."
  },
  {
    "id": "3",
    "service_name": "SEO Optimization",
    "service_image": "https://cdn-icons-png.flaticon.com/512/2875/2875434.png",
    "service_description": "Improving website visibility and ranking in search engines through keyword strategies."
  },
  {
    "id": "4",
    "service_name": "Digital Marketing",
    "service_image": "https://cdn-icons-png.flaticon.com/512/2983/2983629.png",
    "service_description": "Promoting products and services via social media, email, and paid ads."
  },
  {
    "id": "5",
    "service_name": "App Development",
    "service_image": "https://cdn-icons-png.flaticon.com/512/2721/2721298.png",
    "service_description": "Designing and developing cross-platform mobile applications for iOS and Android."
  },
  {
    "id": "6",
    "service_name": "Cloud Hosting",
    "service_image": "https://cdn-icons-png.flaticon.com/512/4149/4149646.png",
    "service_description": "Reliable and scalable cloud hosting solutions with top-tier security and performance."
  }
]

    return (
        <div>
            <p className="text-5xl font-bold">AboutPage</p>
            <Link href="/about/address">
            Address Page
            </Link>
            {
                data.map((d) => {
                   return (
                    <div className="space-y-4">
                        <Link href={`/Services/${d._id}`}>
                        <img src={d.service_image} alt="" />
                        </Link>
                    </div>
                   ) 
                })
            }
        </div>
    )
}