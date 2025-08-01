
function DefaultLayout({
  MainContentComponent,
}: {
  MainContentComponent: React.FC;
}) {
  return (
    <div className="bg-[#fafbed]">
      <div
        className={` 
                    ${"min-h-screen"}  
                   
                    bg-[#fafbed] max-w-[1114px] mx-auto pb-[85px]`}
      >
        <MainContentComponent />
      </div>
    </div>
  );
}

export default DefaultLayout;
