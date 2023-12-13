export default function Home() {
  const addProductToLocalStoraege = () => {};

  return (
    <>
      <h1 className="col-span-4 pc:col-span-8">스마트스토어 재입고 알리미</h1>
      <form className="col-span-4 pc:col-span-8">
        <div className="relative">
          <input
            className="text w-full border-[1px] border-main pc:text-h6 py-[12px] pl-[20px] pr-[44px] pc:py-[18px] pc:pl-[40px] pc:pr-[88px] rounded-full"
            type="url"
            placeholder="스마트(브랜드)스토어 URL을 입력해주세요."
          />
          <button className="absolute top-2/4 translate-y-[-50%] right-[20px] pc:right-[40px] w-[24px] h-[24px] pc:w-[34px] pc:h-[34px]">
            Add
          </button>
        </div>
      </form>
      <div></div>
    </>
  );
}
