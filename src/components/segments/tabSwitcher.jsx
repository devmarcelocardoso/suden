import { useState } from "react";

function TabSwitcher({tabs}){
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const selectedTab = tabs?.find(tab => tab.id === selectedId);

  return(
    <>
      <section className='flex gap-8'>
        <>
          <content className='grid justify-items-end sm:gap-2 gap-6 h-fit'>
            { tabs?.map(tab => (
              <button
                className='flex items-center gap-2 hover:text-green sm:text-lg'
                key={tab.id}        
                onClick={() => setSelectedId(tab.id)}
                style={selectedId === tab.id ? {
                    borderBottom:'1px solid #00923F',
                    color:'#00923F'
                  } 
                : null }
              >
                <label className='sm:block hidden cursor-pointer'>{tab.header}</label>
                {tab.icon}
              </button>
            )) }
          </content>
          <article className='flex flex-col space-y-4 sm:w-96' key={selectedId}>
            <h1 className='flex items-center gap-2 text-green'>
              {selectedTab.icon}
              <label className='sm:text-2xl text-xl'>{selectedTab.header}</label>
            </h1>
            {selectedTab.content}
          </article>
        </>
      </section>
    </>
  )
}

export default TabSwitcher;