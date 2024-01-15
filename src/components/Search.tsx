import { useRouter } from "next/router";
import { useCallback, useRef } from "react";
import { trpc } from "~/utils/trpc";

export default function Search() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const { mutateAsync: worldGenMutation } = trpc.world.create.useMutation();

  const onWorldGenClick = useCallback(async () => {
    const worldGenId = searchRef.current?.value;
    if (!worldGenId) {
      //todo: some error message
      throw new Error("World Seed Cannot Be Empty");
    }

    const { id } = await worldGenMutation({ seed: worldGenId });

    void router.push(`/world/${id}`);
  }, [searchRef, router, worldGenMutation]);

  return (
    <>
      <div className="mb-3">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="focus:border-primary dark:focus:border-primary relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="World seed"
            aria-label="Search"
            aria-describedby="button-addon1"
            ref={searchRef}
          />

          <button
            className="bg-primary hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            type="submit"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={onWorldGenClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
