import * as React from 'react';

// Mock data (temporary, until real API integration)
const mockRooms = [
	{
		id: '1',
		name: 'Lab Komputer 1',
		capacity: 40,
		location: 'Gedung F, Lantai 1',
		facilities: ['Computer', 'Projector', 'AC', 'WiFi'],
		status: 'AVAILABLE',
		image: null,
	},
	{
		id: '2',
		name: 'Lab Komputer 2',
		capacity: 35,
		location: 'Gedung F, Lantai 1',
		facilities: ['Computer', 'Projector', 'AC', 'WiFi'],
		status: 'AVAILABLE',
		image: null,
	},
	{
		id: '3',
		name: 'Lab Multimedia',
		capacity: 30,
		location: 'Gedung G, Lantai 1',
		facilities: ['Camera', 'Green Screen', 'Computer', 'AC'],
		status: 'MAINTENANCE',
		image: null,
	},
	{
		id: '4',
		name: 'Ruang Seminar A',
		capacity: 100,
		location: 'Gedung F, Lantai 2',
		facilities: ['Sound System', 'Projector', 'AC', 'WiFi', 'Podium'],
		status: 'AVAILABLE',
		image: null,
	},
	{
		id: '5',
		name: 'Ruang Seminar B',
		capacity: 80,
		location: 'Gedung F, Lantai 2',
		facilities: ['Sound System', 'Projector', 'AC', 'WiFi'],
		status: 'AVAILABLE',
		image: null,
	},
	{
		id: '6',
		name: 'Ruang Rapat 1',
		capacity: 20,
		location: 'Gedung F, Lantai 3',
		facilities: ['Projector', 'AC', 'Whiteboard'],
		status: 'AVAILABLE',
		image: null,
	},
	{
		id: '7',
		name: 'Ruang Rapat 2',
		capacity: 15,
		location: 'Gedung F, Lantai 3',
		facilities: ['Projector', 'AC', 'WiFi'],
		status: 'UNAVAILABLE',
		image: null,
	},
	{
		id: '8',
		name: 'Lab IoT',
		capacity: 25,
		location: 'Gedung G, Lantai 2',
		facilities: ['Workbench', 'Oscilloscope', 'AC', 'WiFi'],
		status: 'AVAILABLE',
		image: null,
	},
];

export function useAdminRooms() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [statusFilter, setStatusFilter] = React.useState<string>('ALL');

	const filteredRooms = mockRooms.filter((room) => {
		const matchesSearch = room.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesStatus =
			statusFilter === 'ALL' || room.status === statusFilter;
		return matchesSearch && matchesStatus;
	});

	const handleDelete = (roomId: string) => {
		if (confirm('Are you sure you want to delete this room?')) {
			console.log('Deleting room:', roomId);
		}
	};

	return {
		searchQuery,
		setSearchQuery,
		statusFilter,
		setStatusFilter,
		filteredRooms,
		handleDelete,
	};
}
