import { useState } from "react";
import { intervalToDuration, isFuture, isValid, getYear } from "date-fns";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    year: yup
      .string()
      .required("Must not be empty")
      .length(4, "Must be 4 characters")
      .matches(/^\d{4}$/, "Must be 4 digits"),
    month: yup
      .string()
      .required("Must not be empty")
      .length(2, "Must be 2 characters")
      .matches(/^\d{2}$/, "Must be 2 digits"),
    day: yup
      .string()
      .required("Must not be empty")
      .length(2, "Must be 2 characters")
      .matches(/^\d{2}$/, "Must be 2 digits"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Card() {
  const [years, setYears] = useState<number | undefined>(undefined);
  const [months, setMonths] = useState<number | undefined>(undefined);
  const [days, setDays] = useState<number | undefined>(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = ({ year, month, day }) => {
    const date = new Date(`${year}-${month}-${day}`);
    if (!isValid(date)) {
      setError("root.invalidDate", { message: "The date is not valid" });
      onError();
    } else if (isFuture(date)) {
      setError("root.invalidDate", { message: "The date is in the future" });
      onError();
    } else {
      const interval = intervalToDuration({
        start: date,
        end: Date.now(),
      });
      setYears(interval.years);
      setMonths(interval.months);
      setDays(interval.days);
    }
  };

  const onError = () => {
    setYears(undefined);
    setMonths(undefined);
    setDays(undefined);
  };

  return (
    <article className="@container w-full max-w-840">
      <div className="px-24 py-48 bg-white rounded-tl-24 rounded-tr-24 rounded-bl-24 rounded-br-100 @card:rounded-br-200">
        <form className="mb-32" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="grid grid-cols-3 gap-16">
            <div>
              <label>
                <span className="mb-4 block text-label-md text-smokey-grey uppercase">
                  day
                </span>
                <input
                  className="w-full px-16 py-12 border-1 text-body-md text-off-black border-light-grey rounded-8"
                  type="text"
                  placeholder="24"
                  {...register("day")}
                />
              </label>
              {errors.day && (
                <p className="mt-4 text-body-sm text-light-red italic">
                  {errors.day.message}
                </p>
              )}
            </div>
            <div>
              <label>
                <span className="mb-4 block text-label-md text-smokey-grey uppercase">
                  month
                </span>
                <input
                  className="w-full px-16 py-12 border-1 text-body-md text-off-black border-light-grey rounded-8"
                  type="text"
                  placeholder="09"
                  {...register("month")}
                />
              </label>
              {errors.month && (
                <p className="mt-4 text-body-sm text-light-red italic">
                  {errors.month.message}
                </p>
              )}
            </div>
            <div>
              <label>
                <span className="mb-4 block text-label-md text-smokey-grey uppercase">
                  year
                </span>
                <input
                  className="w-full px-16 py-12 border-1 text-body-md text-off-black border-light-grey rounded-8"
                  type="text"
                  placeholder="1984"
                  {...register("year")}
                />
              </label>
              {errors.year && (
                <p className="mt-4 text-body-sm text-light-red italic">
                  {errors.year.message}
                </p>
              )}
            </div>
          </div>
          <p className="mt-4 text-body-sm text-light-red italic">
            {errors.root?.invalidDate.message}
          </p>
          <div className="mt-32 relative flex flex-row justify-center">
            <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-light-grey"></div>
            <div className="relative z-20">
              <button
                type="submit"
                className="flex justify-center items-center w-64 h-64 rounded-full bg-purple"
              >
                <svg
                  className="w-24 h-24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={46}
                  height={44}
                  viewBox="0 0 46 44"
                >
                  <g fill="none" stroke="#FFF" strokeWidth={2}>
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div>
          <p className="text-display-md italic text-off-black">
            <span className="text-purple">{years ?? "--"}</span> years
          </p>
          <p className="text-display-md italic text-off-black">
            <span className="text-purple">{months ?? "--"}</span> months
          </p>
          <p className="text-display-md italic text-off-black">
            <span className="text-purple">{days ?? "--"}</span> days
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
