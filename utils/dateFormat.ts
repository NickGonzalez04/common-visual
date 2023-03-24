import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

// Format time to compare with current time
export default function formatTrxTime (unix: number) {
  const now = dayjs()
  return now.diff(unix, 'seconds') < 60
    ? 'Just now'
    : dayjs.unix(unix).fromNow()
}
