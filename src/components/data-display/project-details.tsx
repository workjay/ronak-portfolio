import { ExternalLink } from "lucide-react";

import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import Tag from "@/components/data-display/tag";
import Card from "@/components/layout/card";

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: "default" | "reverse";
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = "default",
  title,
}: ProjectDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          "flex items-center justify-center overflow-hidden border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12",
          layoutType === "default"
            ? "md:rounded-l-xl md:border-r"
            : "md:order-last md:rounded-r-xl md:border-l"
        )}
      >
        {!!url ? (
          <Link
            href={url}
            noCustomization
            externalLink
            className="block h-fit w-full"
          >
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
              <picture className="block max-h-[350px] min-h-[200px]">
                <img
                  src={previewImage}
                  alt={"Project preview image"}
                  className="block h-full w-full object-cover"
                />
              </picture>
            </div>
          </Link>
        ) : (
          <div className="relative block h-fit w-full overflow-hidden rounded-xl shadow-lg">
            <picture className="block max-h-[350px] min-h-[200px]">
              <img
                src={previewImage}
                alt={"Project preview image"}
                className="block h-full w-full object-cover"
              />
            </picture>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          "flex flex-col gap-6 p-8 md:w-1/2 lg:p-12",
          layoutType === "default" ? "" : "md:order-first"
        )}
      >
        <div className="flex flex-col gap-2">
          <Typography
            variant="subtitle"
            className="font-semibold text-gray-900"
          >
            {name}
          </Typography>
          <Typography variant="body3">{title}</Typography>
        </div>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        <Link
          href={url}
          noCustomization
          className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
          externalLink
        >
          <ExternalLink />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectDetails;
