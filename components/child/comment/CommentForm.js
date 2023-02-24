export default function CommentForm() {
    return (
    <form>
        <div className="flex flex-col items-end border border-primary rounded-lg p-4">
            <textarea
            className="w-full focus:outline-none"
            row="5"
            placeholder="Leave your comment here"
            />
            <button type="submit" className="px-6 py-2.5 rounded-lg bg-sky-500 text-white font-semibold mt-2">Send</button>
        </div>
    </form>
    );
}