import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Service = {
  title: string;
  description: string;
  tags?: string[];
};

export const ServiceCard = () => {
  const services: Service[] = [
    {
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence integration to power your business with smart automation, data analysis, and predictive capabilities.",
      tags: ["AI", "Automation", "Data"],
    },
    {
      title: "Web Development",
      description:
        "Custom, responsive websites built with the latest technologies to deliver exceptional performance and user experiences.",
      tags: ["Frontend", "Backend", "SEO"],
    },
    {
      title: "App Development",
      description:
        "Native and cross-platform mobile applications designed to engage users and extend your digital presence.",
      tags: ["Mobile", "Cross-Platform", "React Native"],
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.",
      tags: ["Design", "User Research", "Prototyping"],
    },
    {
      title: "Branding",
      description:
        "Strategic brand development that communicates your unique value proposition and connects with your target audience.",
      tags: ["Identity", "Logo", "Messaging"],
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <Card key={index} className="w-full md:w-auto font-WorkSans">
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-2">
            {service.tags?.map((tag, tagIndex) => (
              <p
                key={tagIndex}
                className="bg-muted-foreground p-2 text-xs rounded-full"
              >
                {tag}
              </p>
            ))}
          </CardContent>
          <CardFooter>
            <Button>START A DESIGN PROJECT</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
