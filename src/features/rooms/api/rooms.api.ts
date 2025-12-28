import { createServerFn } from '@tanstack/react-start';
import { prisma } from '@/shared/lib/prisma';

export const getRoomsFn = createServerFn({ method: 'GET' }).handler(
	async () => {
		const rooms = await prisma.room.findMany({
			orderBy: { name: 'asc' },
		});
		return rooms;
	},
);

export const getAvailableRoomsFn = createServerFn({ method: 'GET' }).handler(
	async () => {
		const rooms = await prisma.room.findMany({
			where: { status: 'AVAILABLE' },
			orderBy: { name: 'asc' },
		});
		return rooms;
	},
);

export const getRoomByIdFn = createServerFn({ method: 'GET' })
	.inputValidator((id: string) => id)
	.handler(async ({ data: id }) => {
		const room = await prisma.room.findUnique({
			where: { id },
		});
		return room;
	});

export const getRoomStatsFn = createServerFn({ method: 'GET' }).handler(
	async () => {
		const [total, available, maintenance, unavailable] = await Promise.all([
			prisma.room.count(),
			prisma.room.count({ where: { status: 'AVAILABLE' } }),
			prisma.room.count({ where: { status: 'MAINTENANCE' } }),
			prisma.room.count({ where: { status: 'UNAVAILABLE' } }),
		]);

		return { total, available, maintenance, unavailable };
	},
);
