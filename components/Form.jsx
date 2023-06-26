import Link from 'next/link'

const Form = ({
    type,
    post,
    setPost,
    submitting,
    handleSubmit
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className="head_text text-left">
            <span className='blue_gradient'>{type} Case
                </span>
        </h1>
        <p className='desc text-left max-w-md'>
            {type} a case and get started strengthening it with the help of AI
        </p>
        <form 
            onSubmit={handleSubmit}
            className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>


            <div className='flex flex-col items-start'>
                <span className='font-satoshi font-semibold text-base text-gray-700 mb-2'>
                    Which side is your case for?
                </span>
                <label className='flex items-center'>
                    <input
                    type='radio'
                    value='pro'
                    checked={post.side === 'pro'}
                    onChange={(e) => setPost({ ...post, side: e.target.value })}
                    className='mr-2'
                    />
                    <span className='text-base text-gray-700'>Pro</span>
                </label>
                <label className='flex items-center'>
                    <input
                    type='radio'
                    value='con'
                    checked={post.side === 'con'}
                    onChange={(e) => setPost({ ...post, side: e.target.value })}
                    className='mr-2'
                    />
                    <span className='text-base text-gray-700'>Con</span>
                </label>
            </div>
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Your contention
                </span>
                <textarea 
                    value={post.argument}
                    onChange={(e) => setPost({ ...post,
                    argument: e.target.value})} 
                    placeholder='Write your argument here...'
                    className='form_textarea'
                />
            </label>
            {/* <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Your contention
                </span>
                <textarea 
                    value={post.prompt}
                    onChange={(e) => setPost({ ...post,
                    prompt: e.target.value})} 
                    placeholder='Write your argument here...'
                    className='form_textarea'
                />
            </label>
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Your contention
                </span>
                <textarea 
                    value={post.prompt}
                    onChange={(e) => setPost({ ...post,
                    prompt: e.target.value})} 
                    placeholder='Write your argument here...'
                    className='form_textarea'
                />
            </label> */}
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Topic {` `}
                    <span className='font-normal'>(this house believes)</span>
                </span>
                <input 
                    value={post.topic}
                    onChange={(e) => setPost({ ...post,
                    topic: e.target.value})} 
                    placeholder='topic'
                    required
                    className='form_input'
                />
            </label>

            <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href='/' className='text-gray-500 text-sm'>
                    Cancel
                </Link>

                <button 
                    type='submit'
                    disabled={submitting}
                    className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
                        {submitting ? `${type}...` : type}
                </button>

            </div>

        </form>
    </section>
  )
}

export default Form