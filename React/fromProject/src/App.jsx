import React, { useState } from 'react'

export default function App() {

  const [Data, SetData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('saveData')) || []
    return Array.isArray(savedData) ? savedData.filter((item) => item && !Array.isArray(item)) : []
  });
  const [Editindex, SetIndex] = useState(null);

  let handelForm = (e) => {
    e.preventDefault();

    let Obj = {
      name: e.target.Username.value,
      email: e.target.Useremail.value,
      phone: e.target.Usernumber.value,
      message: e.target.Usermessage.value
    }

    let NewData = Editindex === null
      ? [...Data, Obj]
      : Data.map((item, index) => index === Editindex ? Obj : item)

    localStorage.setItem('saveData', JSON.stringify(NewData))

    SetData(NewData);
    SetIndex(null)
    e.target.reset()
  }


  let DeleteData = (index) => {

    let Delete = Data.filter((_, itemIndex) => itemIndex !== index);

    localStorage.setItem('saveData', JSON.stringify(Delete))
    SetData(Delete)
    // if (Editindex === index) SetIndex(null)
  }

  let EditData = Editindex === null ? null : Data[Editindex]

  return (
    <>
      <main className="min-h-screen bg-[#f4f1ea] px-4 py-8 text-[#17211c] sm:px-6 lg:px-10 lg:py-12">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(33,48,39,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
          <section className="relative overflow-hidden bg-[#214c3a] px-6 py-10 text-[#f4f1ea] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="relative z-10 flex h-full flex-col">
              <p className="mb-16 text-xs font-semibold uppercase tracking-[0.24em] text-[#c8d8c5]">Let&apos;s talk</p>
              <div className="max-w-sm">
                <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl">Have an idea? Let&apos;s bring it to life.</h1>
                <p className="mt-6 max-w-xs text-base leading-7 text-[#d5e1d1]">
                  Tell us a little about your project and we&apos;ll get back to you within two business days.
                </p>
              </div>
              <div className="mt-auto pt-16 text-sm text-[#c8d8c5]">
                <p>hello@northstudio.co</p>
                <p className="mt-2">+1 (555) 014-0288</p>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[30px] border-[#d6e3c6]/20" aria-hidden="true" />
            <div className="absolute -right-10 top-24 h-40 w-40 rounded-full bg-[#d6e3c6]/10" aria-hidden="true" />
          </section>

          <section className="px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            <div className="mx-auto max-w-xl">
              <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#a27043]">01 / 01</p>
                  <h2 className="mt-3 font-serif text-3xl tracking-[-0.02em] text-[#17211c] sm:text-4xl">Send us a message</h2>
                </div>
                <span className="mb-1 hidden text-xs text-[#68736b] sm:block">All fields required</span>
              </div>

              <form key={Editindex ?? 'new'} className="space-y-6" onSubmit={handelForm}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#344139]">Name</label>
                    <input id="name" name="Username" type="text" autoComplete="name" placeholder="Your name" defaultValue={EditData?.name || ''} required className="w-full border-0 border-b border-[#cbd2ca] bg-transparent px-0 py-3 text-base text-[#17211c] outline-none transition placeholder:text-[#9ca59e] focus:border-[#214c3a] focus:ring-0" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#344139]">Email</label>
                    <input id="email" name="Useremail" type="email" autoComplete="email" placeholder="you@example.com" defaultValue={EditData?.email || ''} required className="w-full border-0 border-b border-[#cbd2ca] bg-transparent px-0 py-3 text-base text-[#17211c] outline-none transition placeholder:text-[#9ca59e] focus:border-[#214c3a] focus:ring-0" />
                  </div>
                </div>

                <div>
                  <label htmlFor="number" className="mb-2 block text-sm font-medium text-[#344139]">Phone number</label>
                  <input id="number" name="Usernumber" type="tel" autoComplete="tel" placeholder="+91 852937410" defaultValue={EditData?.phone || ''} maxLength={10} required className="w-full border-0 border-b border-[#cbd2ca] bg-transparent px-0 py-3 text-base text-[#17211c] outline-none transition placeholder:text-[#9ca59e] focus:border-[#214c3a] focus:ring-0" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#344139]">Message</label>
                  <textarea id="message" name="Usermessage" rows="5" placeholder="Tell us about your project..." defaultValue={EditData?.message || ''} required className="w-full resize-y rounded-xl border border-[#cbd2ca] bg-[#fafbf8] px-4 py-3 text-base text-[#17211c] outline-none transition placeholder:text-[#9ca59e] focus:border-[#214c3a] focus:ring-2 focus:ring-[#214c3a]/10" />
                </div>

                <button type="submit" className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#a27043] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#825532] focus:outline-none focus:ring-2 focus:ring-[#a27043] focus:ring-offset-2 sm:w-auto">
                  {Editindex === null ? 'Send message' : 'Update message'}
                  <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">-&gt;</span>
                </button>
                {Editindex !== null && (
                  <button type="button" onClick={() => SetIndex(null)} className="ml-3 text-sm font-semibold text-[#68736b] underline underline-offset-4">
                    Cancel edit
                  </button>
                )}
              </form>
            </div>
          </section>
        </div>
      </main>

      <section className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-3xl bg-white p-6 shadow-[0_24px_80px_rgba(33,48,39,0.1)] sm:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#a27043]">Submissions</p>
            <h2 className="mt-2 font-serif text-3xl tracking-[-0.02em] text-[#17211c]">Recent messages</h2>
          </div>
          <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs font-semibold text-[#68736b]">Preview</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#dfe4dd]">
          <table className="w-full min-w-175 border-collapse text-left text-sm">
            <thead className="bg-[#f4f1ea] text-xs uppercase tracking-[0.12em] text-[#68736b]">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Name</th>
                <th scope="col" className="px-5 py-4 font-semibold">Email</th>
                <th scope="col" className="px-5 py-4 font-semibold">Phone</th>
                <th scope="col" className="px-5 py-4 font-semibold">Message</th>
                <th scope="col" className="px-5 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8ece6] text-[#344139]">

              {Data.length > 0 ?

                (
                  Data.map((item, index) => {

                    return (
                      <tr className="transition hover:bg-[#fafbf8]" key={index}>
                        <td className="whitespace-nowrap px-5 py-4 font-medium text-[#17211c]">{item.name}</td>
                        <td className="whitespace-nowrap px-5 py-4">{item.email}</td>
                        <td className="whitespace-nowrap px-5 py-4">{item.phone}</td>
                        <td className="max-w-sm px-5 py-4">{item.message}</td>
                        <td className="max-w-sm px-5 py-4">
                          <button type="button" className='bg-blue-400 px-3 py-1 text-white rounded-2xl cursor-pointer'
                            onClick={() => SetIndex(index)}
                          >
                            Edit</button>
                          <button type="button" className='bg-red-500 ms-1 px-3 py-1 text-white rounded-2xl cursor-pointer'
                            onClick={() => DeleteData(index)}
                          >Delete</button>
                        </td>
                      </tr>
                    )
                  })
                )

                :

                (
                  <tr>
                    <td colSpan="5" className="px-5 py-10 text-center text-[#68736b]">No records found yet.</td>
                  </tr>
                )

              }



            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
